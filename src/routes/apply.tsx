import { useEffect } from "react"

import { createFileRoute } from "@tanstack/react-router"

import { buildRandomTarget } from "@/utils/clubLinks"

export const Route = createFileRoute("/apply")({
  component: () => {
    useEffect(() => {
      const target = buildRandomTarget()
      window.location.replace(target)
    }, [])
    return null
  },
})
