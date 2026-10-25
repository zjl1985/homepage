import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center text-center edge">
      <div>
        <p className="font-display text-[clamp(6rem,25vw,16rem)] italic leading-none text-accent">404</p>
        <p className="mt-4 text-muted">这里什么都没有。Nothing here.</p>
        <Link href="/" className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.18em] hover:text-accent">
          ← 回到首页
        </Link>
      </div>
    </main>
  );
}
