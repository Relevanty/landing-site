import EventItem from "./EventItem"
import "./EventsSection.css"

type EventStatus = "Этой зимой" | "Действует" | "Идет набор"

const statusClassMap: Record<EventStatus, string> = {
  "Этой зимой": "planned",
  Действует: "active",
  "Идет набор": "recruiting",
}

interface Event {
  status: EventStatus
  title: string
  description: string
  regularity: string
}

const eventsData: Event[] = [
  {
    status: "Действует",
    title: "Мастермайнд-группа",
    description: "Строго модерируемые встречи, направленные на преодоление текущих затруднений.",
    regularity: "Ежедневные короткие звонки \n(до 15 мин)",
  },
  {
    status: "Идет набор",
    title: "Книжный клуб",
    description:
      "Вспоминаем мудрость детских книг, находим мечту в научной фантастике. \nСинхронизируем моральные ценности.",
    regularity: "Беседы 1 раз в неделю",
  },

  {
    status: "Действует",
    title: "Клуб английского языка",
    description:
      "Акцент на разговорную и письменную практику. Уровень от B1 до C2. Поддержание и развитие уровня.",
    regularity: "Беседы 1 раз в неделю",
  },
  {
    status: "Идет набор",
    title: "Прикладное программирование",
    description:
      "Основы fullstack разработки. Начало с теории и frontend. JavaScript, React, NodeJS. \nОриентир на трудоустройство.",
    regularity: "Ежедневное взаимообучение",
  },
  {
    status: "Действует",
    title: "Развитие речи ",
    description:
      "Самопрезентация, навыки продаж, публичные выступления, сторителлинг, письменная речь. Практические занятия, сессии.",
    regularity: "1 раз в неделю",
  },
  {
    status: "Действует",
    title: "Формирование сообщества",
    description:
      "Поиск и рекомендация кандидатов. Продвижение сообщества. Подготовка материалов. \nЭто наша основная задача на данный момент. ",
    regularity: "Ежедневная работа",
  },
  {
    status: "Идет набор",
    title: "Тренировки прохождения собеседований",
    description:
      "Алгоритмы и структуры данных, архитектурные и поведенческие секции. Уровень от Intern до Staff. Взаимные тестовые собеседования.",
    regularity: "Онлайн встречи 1 раз в неделю",
  },
  {
    status: "Этой зимой",
    title: "Сборы",
    description:
      "Собираемся вместе для реализации краткосрочного проекта. Например, поучаствовать в хакатоне или сходить в поход. ",
    regularity: "2-4 дня без работы, или до 2 недель, совмещая с работой. \nОколо 2 раз в год",
  },
]

function EventsSection() {
  return (
    <div className="events-container">
      <div className="sidebar">
        <h4>Наши события</h4>
        <p className="description">
          Это не просто полезные занятия, но и способ узнать друг друга в деле. Поэтому все
          мероприятия обязательны и доступны только для участников сообщества.
        </p>
      </div>
      <div className="events">
        <div className="box">
          {eventsData.map((event, index) => (
            <EventItem key={index} event={event} statusClass={statusClassMap[event.status]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsSection
