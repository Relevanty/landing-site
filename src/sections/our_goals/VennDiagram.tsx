import React from "react"

import "./VennDiagram.css"

const VennDiagram: React.FC = () => {
  return (
    <div className="venn-diagram-wrapper">
      {/* Top Circle - Reliable Community */}
      <div className="venn-circle venn-circle--top">
        <div className="venn-icon-wrapper">
          <img src="/images/hand.webp" alt="HandShake" className="venn-icon-image" />
        </div>
      </div>

      {/* Bottom Left Circle - Health and Longevity */}
      <div className="venn-circle venn-circle--bottom-left">
        <div className="venn-icon-wrapper">
          <img src="/images/apple.webp" alt="Health" className="venn-icon-image" />
        </div>
      </div>

      {/* Bottom Right Circle - Financial Independence */}
      <div className="venn-circle venn-circle--bottom-right">
        <div className="venn-icon-wrapper">
          <img src="/images/moneybag.webp" alt="Money" className="venn-icon-image" />
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="venn-text-label venn-text-label--top">
        <div className="venn-main-text">Надежное сообщество</div>
        <div className="venn-sub-text">одно для всех</div>
      </div>

      <div className="venn-text-label venn-text-label--bottom-left">
        <div className="venn-main-text">Здоровье и долголетие</div>
        <div className="venn-sub-text">каждого участника</div>
      </div>

      <div className="venn-text-label venn-text-label--bottom-right">
        <div className="venn-main-text">Финансовая независимость</div>
        <div className="venn-sub-text">каждому участнику</div>
      </div>

      <div className="venn-black-dot venn-black-dot--top"></div>
      <div className="venn-black-dot venn-black-dot--bottom-left"></div>
      <div className="venn-black-dot venn-black-dot--bottom-right"></div>
    </div>
  )
}

export default VennDiagram
