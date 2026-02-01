const METRIKA_ID = 105202450

export function metrikaHit(path?: string) {
  if (typeof window === "undefined") return
  const ymFn = (window as any).ym
  if (typeof ymFn !== "function") return

  // если path не передали, бьём текущий url с query
  const url = path ?? window.location.pathname + window.location.search

  try {
    ymFn(METRIKA_ID, "hit", url)
  } catch {
    // тишина — чтобы не ломать редирект
  }
}
