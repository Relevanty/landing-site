import { useEffect, useState } from "react"

import debounce from "@/utils/debounce"

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= breakpoint
    }
    return false // Default to false for SSR
  })

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= breakpoint)
    }, 100) // Debounce time in milliseconds

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
