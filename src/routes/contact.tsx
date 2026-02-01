import { useEffect } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { buildRandomTarget } from "@/utils/clubLinks"
import { metrikaHit } from "@/utils/metrika"

export const Route = createFileRoute("/contact")({
  component: ContactRedirect,
})

function ContactRedirect() {
  useEffect(() => {
    // 1) фиксируем просмотр редирект-страницы
    metrikaHit()

    // 2) чуть ждём, чтобы запрос в Метрику реально ушёл
    const target = buildRandomTarget()
    const id = window.setTimeout(() => {
      window.location.replace(target)
    }, 150)

    return () => clearTimeout(id)
  }, [])

  return null
}
