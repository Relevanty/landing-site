import * as React from "react"

import "./JuicyHeader.css"

interface JuicyHeaderProps {
  backgroundImage: string
  title: string
  backgroundPosition?: string
}

const JuicyHeader: React.FC<JuicyHeaderProps> = ({
  backgroundImage,
  title,
  backgroundPosition = "center",
}) => {
  return (
    <section
      className="juicy-header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition,
      }}
    >
      <div className="content">
        <p className="community-title">{title}</p>
      </div>
    </section>
  )
}

export default JuicyHeader
