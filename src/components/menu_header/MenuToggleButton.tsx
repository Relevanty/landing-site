import * as React from "react"

import "./MenuToggleButton.css"

interface MenuToggleButtonProps {
  isOpen: boolean
  onClick: () => void
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button className={`menu-toggle-button`} onClick={onClick}>
      <div className={`line top ${isOpen ? "open" : ""}`}></div>
      <div className={`line middle ${isOpen ? "open" : ""}`}></div>
      <div className={`line bottom ${isOpen ? "open" : ""}`}></div>
    </button>
  )
}

export default MenuToggleButton
