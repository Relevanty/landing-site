import { createFileRoute } from "@tanstack/react-router"

import JuicyHeader from "@/components/juicy_header/JuicyHeader"

import BigFooterSection from "@/sections/big_footer/BigFooterSection"
import DevelopmentPrioritiesTimeline from "@/sections/develop/Develop"
import OurGoals from "@/sections/our_goals/OurGoals"

export const Route = createFileRoute("/strategy")({
  component: Strategy,
})

function Strategy() {
  return (
    <div className="page-content">
      <JuicyHeader
        backgroundImage="/images/strategy1.png"
        backgroundPosition="center 40%"
        title="Стратегия"
      />
      <OurGoals />
      <DevelopmentPrioritiesTimeline />
      <BigFooterSection />
    </div>
  )
}
