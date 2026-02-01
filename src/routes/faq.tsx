import { createFileRoute } from "@tanstack/react-router"

import JuicyHeader from "@/components/juicy_header/JuicyHeader"

import BigFooterSection from "@/sections/big_footer/BigFooterSection"
import Question from "@/sections/question/Question"

export const Route = createFileRoute("/faq")({
  component: Community,
})

function Community() {
  return (
    <div className="page-content">
      <JuicyHeader backgroundImage="/images/team.png" backgroundPosition="center 30%" title="FAQ" />
      <Question />
      <BigFooterSection />
    </div>
  )
}
