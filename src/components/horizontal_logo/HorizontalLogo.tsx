import * as React from "react"

import "./HorizontalLogo.css"

interface HorizontalLogoProps {
  expand: boolean
  size: number
}

const HorizontalLogo: React.FC<HorizontalLogoProps> = ({ expand, size }) => {
  return (
    <div className={`horizontal-logo ${expand ? "expand" : "tight"}`}>
      <img
        src="/logo.svg"
        alt="Logo"
        className="logo-image"
        style={{ width: size }}
      />
      <span className="logo-text">RELEVANTY</span>
    </div>
  )
}

export default HorizontalLogo
