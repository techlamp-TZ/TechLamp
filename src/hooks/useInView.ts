"use client";

import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled near the viewport. Used to lazy-mount expensive (WebGL) content. */
export function useInView<T extends HTMLElement>(rootMargin = "200px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin]);

  return { ref, inView };
}
