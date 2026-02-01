import { ReactNode } from "react"

import "./PrincipleItem.css"

interface PrincipleItemProps {
  children: ReactNode
}

export default function PrincipleItem({ children }: PrincipleItemProps) {
  return <div className="principle-item">{children}</div>
}
