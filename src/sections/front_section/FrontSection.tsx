import * as React from "react"

import "./FrontSection.css"

const FrontSection: React.FC = () => {
  return (
    <section className="front-section">
      <div className="content">
        <img src="/logo.svg" alt="Logo" className="logo-image" />
        <p className="community-title">RELEVANTY</p>
        <p className="description">
          Сообщество людей, вместе стремящихся <br /> прожить невероятную жизнь
        </p>
        <a href="/apply" className="join-button">
          Познакомиться с нами
        </a>
        <p className="main-points">капитал • долголетие • надежные люди рядом</p>
      </div>
    </section>
  )
}

export default FrontSection
