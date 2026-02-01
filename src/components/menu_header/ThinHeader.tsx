import * as React from "react"
import { useState } from "react"

import FullScreenMenu from "./FullScreenMenu"
import MenuToggleButton from "./MenuToggleButton"
import "./ThinHeader.css"

interface ThinHeaderProps {
  isScrolled: boolean
}

const ThinHeader: React.FC<ThinHeaderProps> = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`thin-menu-header ${isScrolled || menuOpen ? "scrolled" : ""}`}>
      <img src="/logo.svg" alt="Logo" className="logo-image left" />
      <span className="logo-text center">RELEVANTY</span>
      <MenuToggleButton isOpen={menuOpen} onClick={toggleMenu} />
      <FullScreenMenu isOpen={menuOpen} onClose={toggleMenu} />
    </header>
  )
}

export default ThinHeader
