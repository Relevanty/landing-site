import * as React from "react"

import { Outlet } from "@tanstack/react-router"

import "./PageTransition.css"

const PageTransition: React.FC = () => {
  return (
    <div className={`page-transition`}>
      <Outlet />
    </div>
  )
}

export default PageTransition
