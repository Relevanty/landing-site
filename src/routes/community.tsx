import { createFileRoute } from "@tanstack/react-router"

import JuicyHeader from "@/components/juicy_header/JuicyHeader"

import BigFooterSection from "@/sections/big_footer/BigFooterSection"
import PrinciplesSection from "@/sections/principles/PrinciplesSection"

export const Route = createFileRoute("/community")({
  component: Community,
})

function Community() {
  return (
    <div className="page-content">
      <JuicyHeader
        backgroundImage="/images/comm.png"
        backgroundPosition="center 40%"
        title="Сообщество"
      />
      <PrinciplesSection />
      <BigFooterSection />
    </div>
  )
}
