// src/components/BigFooterSection.tsx
import * as React from "react"

import { buildRandomTarget } from "@/utils/clubLinks"

import "./BigFooterSection.css"

const BigFooterSection: React.FC = () => {
  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.replace(buildRandomTarget())
  }, [])

  return (
    <section className="big-footer-section">
      <div className="enroll-section">
        <h2 className="big-footer-header">Напиши нам</h2>
        <a href="https://t.me/RELEVANTY_CLUB" className="join-button" onClick={onClick}>
          Познакомиться с нами
        </a>
      </div>
      <div className="big-footer-content">
      <div className="big-footer-logo">
  <img src="logo.svg" alt="logo small" className="small-footer-img" />
</div>
        <div className="big-footer-contact-details">
          <p>© 2025 Сообщество Релеванты</p>
        </div>
      </div>
    </section>
  )
}
export default BigFooterSection
