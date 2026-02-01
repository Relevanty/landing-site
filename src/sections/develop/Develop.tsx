import React from "react"

import "./Develop.css"

interface TimelineItem {
  id: number
  year: string
  title: string
  description: string
}

const DevelopmentPrioritiesTimeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: "2026",
      title: "Формирование команды",
      description: "находим целеустремленных единомышленников",
    },
    {
      id: 2,
      year: "2027",
      title: "Становление команды",
      description: "учимся работать вместе, решая актуальные проблемы друг друга",
    },
    {
      id: 3,
      year: "2028",
      title: "Накопление ресурсов",
      description:
        "получаем знания, строим карьеру, создаем сеть знакомств, собираем стартовый капитал",
    },
    {
      id: 4,
      year: "2030",
      title: "Стратегические проекты",
      description: "запускаем инвестиционные проекты, преумножаем капитал сообщества",
    },
    {
      id: 5,
      year: "2035",
      title: "Свободный выбор",
      description: "решаем, что делать дальше с новыми возможностями",
    },
  ]

  return (
    <div className="timeline-container">
      <div className="timeline-title">Акценты развития</div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        <div className="timeline-items">
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevelopmentPrioritiesTimeline
