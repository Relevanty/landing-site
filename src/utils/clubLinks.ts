// src/lib/clubLinks.ts
export enum ClubLinks {
  lita = "https://t.me/leramire",
  luna = "https://t.me/zhaniyazd",
}

const LINK_VALUES = Object.values(ClubLinks) as string[]

export function pickRandomLink(): string {
  const i = Math.floor(Math.random() * LINK_VALUES.length)
  return LINK_VALUES[i]
}

export function buildRandomTarget(params?: { search?: string; hash?: string }) {
  const base = pickRandomLink()
  const url = new URL(base)
  const search = params?.search ?? (typeof window !== "undefined" ? window.location.search : "")
  const hash = params?.hash ?? (typeof window !== "undefined" ? window.location.hash : "")

  if (search) url.search = search
  if (hash) url.hash = hash
  return url.toString()
}
