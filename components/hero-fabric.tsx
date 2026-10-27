"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const vertex = `attribute vec2 a_position; varying vec2 v_uv; void main(){v_uv=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}`;
const fragment = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_pointer;
uniform float u_strength;
uniform sampler2D u_texture;
float field(vec2 p){
  float a=p.x*14.0+p.y*5.0+sin(p.y*4.0+u_time*.15)*1.8+u_time*.4;
  float b=p.x*7.0-p.y*6.0-u_time*.25;
  float broad=p.x*5.0+p.y*3.5+sin(p.y*2.5-u_time*.12)*1.4;
  float d=distance(p,u_pointer);
  return sin(a)*.95+sin(b)*.3+sin(broad)*.9+exp(-d*d*32.0)*u_strength*.75;
}
void main(){
  vec2 p=v_uv;
  float h=field(p);
  float hx=field(p+vec2(.003,0.))-field(p-vec2(.003,0.));
  float hy=field(p+vec2(0.,.003))-field(p-vec2(0.,.003));
  vec3 normal=normalize(vec3(-hx*32.,-hy*32.,1.));
  float light=clamp(dot(normal,normalize(vec3(-.5,.6,1.))),0.,1.);
  vec2 uv=vec2(p.x*3.7+h*.10,p.y*5.2+h*.045);
  float ink=texture2D(u_texture,uv).r;
  vec3 dark=vec3(.012,.015,.014);
  vec3 mid=vec3(.24,.25,.24);
  vec3 base=mix(dark,mid,pow(light,2.1));
  base+=vec3(.86,.86,.82)*ink*(.04+pow(light,3.)*.62);
  base+=pow(max(light,0.),30.)*.18;
  float edge=.17+.10*sin(p.y*3.5+u_time*.18)+.07*p.y;
  float mask=smoothstep(edge,edge+.05,p.x);
  mask*=smoothstep(0.,.22,p.y);
  gl_FragColor=vec4(base,mask);
}`;

export function HeroFabric() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let gl: WebGLRenderingContext | null = null;
    try { gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false }); } catch { return; }
    if (!gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    const fallback = canvas.previousElementSibling as HTMLElement | null;
    gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position"); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const textureCanvas = document.createElement("canvas"); textureCanvas.width = 256; textureCanvas.height = 256;
    const tex = textureCanvas.getContext("2d");
    if (!tex) return;
    tex.fillStyle = "black"; tex.fillRect(0, 0, 256, 256);
    tex.fillStyle = "white"; tex.font = "9px monospace";
    for (let y = 9; y < 256; y += 12) for (let x = 0; x < 256; x += 32) tex.fillText("zero", x, y);
    const texture = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const time = gl.getUniformLocation(program, "u_time"), pointer = gl.getUniformLocation(program, "u_pointer"), strengthUniform = gl.getUniformLocation(program, "u_strength");
    let frame = 0, visible = false, elapsed = 0, last = 0, lastDraw = 0, px = -5, py = -5, strength = 0, drawn = false;
    const draw = () => { gl.uniform1f(time, elapsed / 1000); gl.uniform2f(pointer, px, py); gl.uniform1f(strengthUniform, strength); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); if (!drawn && gl.getError() === gl.NO_ERROR) { drawn = true; if (fallback) fallback.style.visibility = "hidden"; } };
    const resize = () => { const box = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5); canvas.width = Math.max(1, Math.round(box.width*dpr)); canvas.height = Math.max(1, Math.round(box.height*dpr)); gl.viewport(0, 0, canvas.width, canvas.height); draw(); };
    const tick = (now: number) => {
      if (!visible || document.hidden || reduce || gl.isContextLost()) { frame = 0; last = 0; return; }
      if (last) elapsed += Math.min(now-last, 50); last = now;
      if (now-lastDraw >= 33) { strength *= .98; draw(); lastDraw = now; }
      frame = requestAnimationFrame(tick);
    };
    const start = () => { if (visible && !document.hidden && !reduce && !frame) frame=requestAnimationFrame(tick); };
    const observer = new IntersectionObserver(([entry]) => { visible=entry.isIntersecting; if (visible) start(); else { cancelAnimationFrame(frame); frame=0; last=0; } }); observer.observe(canvas);
    const move = (event: PointerEvent) => { if (reduce || event.pointerType !== "mouse") return; const box=canvas.getBoundingClientRect(); px=(event.clientX-box.left)/box.width; py=1-(event.clientY-box.top)/box.height; strength=1; };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame=0; last=0; } else start(); };
    const lost = (event: Event) => { event.preventDefault(); canvas.style.opacity="0"; if (fallback) fallback.style.visibility="visible"; cancelAnimationFrame(frame); frame=0; };
    const ro = new ResizeObserver(resize); ro.observe(canvas); window.addEventListener("pointermove",move,{passive:true}); document.addEventListener("visibilitychange",visibility); canvas.addEventListener("webglcontextlost",lost);
    resize();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); ro.disconnect(); window.removeEventListener("pointermove",move); document.removeEventListener("visibilitychange",visibility); canvas.removeEventListener("webglcontextlost",lost); gl.deleteTexture(texture); gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vs); gl.deleteShader(fs); };
  }, [reduce]);
  return <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 h-full w-[65%] max-md:w-[78%] max-md:opacity-55">
    <div className="absolute inset-y-0 right-0 w-3/4 rounded-l-[45%] bg-[repeating-linear-gradient(105deg,#202321_0%,#515451_8%,#161817_17%)] opacity-50" />
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
  </div>;
}
