"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";

const fmt = new Intl.DateTimeFormat("zh-CN", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: site.timezone,
});

function subscribe(cb: () => void) {
  const id = setInterval(cb, 10_000);
  return () => clearInterval(id);
}

/** 显示站长所在时区的当前时间（仅客户端渲染） */
export function Clock({ className }: { className?: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => fmt.format(new Date()),
    () => "--:--",
  );
  return (
    <time className={className} suppressHydrationWarning>
      {time}
    </time>
  );
}
