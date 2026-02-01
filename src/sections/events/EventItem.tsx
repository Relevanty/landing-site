import * as React from "react"

import "./EventItem.css"

interface Event {
  status: string
  title: string
  description: string
  regularity: string
}

interface EventItemProps {
  event: Event
  statusClass: string
}

// Function to convert \n to <br />
const formatText = (text: string) => {
  return text.split("\n").map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ))
}

const EventItem: React.FC<EventItemProps> = ({ event, statusClass }) => {
  return (
    <div className="event-item">
      <div className={`status-${statusClass}`}>{event.status}</div>
      <div className="title">{event.title}</div>
      <br />
      <div className="description">{formatText(event.description)}</div>
      <br />
      <div className="regularity">{event.regularity}</div>
    </div>
  )
}

export default EventItem
