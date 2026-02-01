import React from "react"

import FlowCenter from "./FlowCenter"
import FlowDown from "./FlowDown"
import FlowUp from "./FlowUp"
import { useIsMobile } from "./useIsMobile"

export const FlowSection: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
          marginTop: "8px",
        }}
      >
        Пути развития целей
      </h1>

      <section className="flow-section" id="flow-up" style={{ marginTop: "30px" }}>
        <FlowUp />
      </section>

      <section
        className="flow-section"
        id="flow-center"
        style={{ marginTop: isMobile ? "-340px" : "-400px" }}
      >
        <FlowCenter />
      </section>

      <section
        className="flow-section"
        id="flow-down"
        style={{ marginTop: isMobile ? "-250px" : "-150px" }}
      >
        <FlowDown />
      </section>
    </div>
  )
}
