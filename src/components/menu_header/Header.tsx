import * as React from "react"
import { useEffect, useState } from "react"

import useIsMobile from "@/hooks/useIsMobile"

import ThinHeader from "./ThinHeader"
import WideHeader from "./WideHeader"

const Header: React.FC = () => {
  const isMobile = useIsMobile()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const firstSectionHeight = window.innerHeight
      setIsScrolled(scrollPosition > firstSectionHeight * 0.3)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isMobile ? <ThinHeader isScrolled={isScrolled} /> : <WideHeader isScrolled={isScrolled} />}
    </>
  )
}

export default Header
