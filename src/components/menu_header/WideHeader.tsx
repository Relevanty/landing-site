import * as React from "react"

import { Link } from "@tanstack/react-router"

import HorizontalLogo from "@/components/horizontal_logo/HorizontalLogo"

import "./WideHeader.css"

interface WideHeaderProps {
  isScrolled: boolean
}

const WideHeader: React.FC<WideHeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`wide-menu-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="left">
        <HorizontalLogo expand={false} size={54} />
      </div>
      <nav className="center">
        <Link to="/" className="item" activeProps={{ className: "item active" }}>
          Главная
        </Link>
        <Link to="/community" className="item" activeProps={{ className: "item active" }}>
          Сообщество
        </Link>

        <Link to="/strategy" className="item" activeProps={{ className: "item active" }}>
          Стратегия
        </Link>
        <Link to="/faq" className="item" activeProps={{ className: "item active" }}>
          Вопросы
        </Link>
        {/* <Link to="/strategy" className="item">
          Стратегия
        </Link>
        <Link to="/faq" className="item">
          FAQ
        </Link> */}
      </nav>
      <nav className="right">
        {/*<Link to="/partnership" className="item">*/}
        {/*  Партнерство*/}
        {/*</Link>*/}
        <Link to="/apply" className="join-button" activeProps={{ className: "join-button active" }}>
          Познакомиться с нами
        </Link>
        {/* <a href="https://chat.relevanty.org/#/login" className="item">
          Вход
        </a> */}
      </nav>
    </header>
  )
}

export default WideHeader
