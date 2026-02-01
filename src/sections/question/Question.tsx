import React, { useState } from "react"

import "./Question.css"

interface QuestionItem {
  title: string
  body: string
}

const Question: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const questionData: QuestionItem[] = [
    {
      title: "Это бизнес сообщество?",
      body: "Нет, это не бизнес сообщество, это сообщество по созданию капитала. Бизнес недостаточно надежен для заработка начального капитала, но может быть применен для его увеличения в будущем.",
    },
    {
      title: "Это сообщество программистов?",
      body: "Нет, это не сообщество программистов. Мы используем карьеру в программировании, как инструмент создания начального капитала, потому что он хорошо работает. При появлении лучших условий мы сменим инструмент.",
    },
    {
      title: "Это сообщество ЗОЖников?",
      body: "Мы ценим здоровый образ жизни и разумный подход к долголетию.",
    },
    {
      title: "Какой возраст участников?",
      body: "Ценза нет, на данный момент участникам от 18 до 27 лет.",
    },
    {
      title: "Можно ли к вам присоединиться с плохим знанием английского?",
      body: "Можно попробовать. Но надо будет посещать дополнительные занятия английского (проводятся в сообществе), и учиться самостоятельно, чтобы подтянуть его до C1 за полгода-год.",
    },
    {
      title: "Как вы из студентов сделаете миллионеров?",
      body: "Старательное развитие → стабильный заработок → сложный процент + время",
    },
    {
      title: "Как вступить?",
      body: "Кнопку 'Познакомиться' нажми.",
    },
    {
      title: "Почему это бесплатно?",
      body: "Потому что главное для нас — собрать сильное сообщество единомышленников. Деньги мы зарабатываем более эффективными способами.",
    },
    {
      title: "Что, если я никак не могу посещать какие-то мероприятия?",
      body: "Обо всем можно договориться.",
    },
    {
      title: "Сколько людей в сообществе?",
      body: "До 15 человек. При превышении мы увеличиваем темп развития, чтобы остались те, кому это действительно важно. В случае ажиотажа — запустим параллельные группы.",
    },
    {
      title: "Как и за что исключают?",
      body: "Исключают (a.k.a кикают из чата) только за регулярные или грубые нарушения дисциплины. Но слабая заинтересованность в сообществе и безучастность к общим проектам приводит к постепенной изоляции.",
    },
    {
      title: "Как отбираете надежных людей?",
      body: "Испытательный срок 2 года с постепенным ростом влияния и доверия.",
    },
    {
      title: "Почему такой долгий испытательный срок?",
      body: "Это просто название, по-факту участие в сообществе начинается с первого дня.",
    },
    {
      title: "А что после достижения результата?",
      body: "Финансовая свобода → свободная жизнь → новый трек. Можно остаться, запустить новые проекты, или уйти в одиночное плавание. Главное — дойти до финиша вместе.",
    },
  ]

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = (): void => {
    setHoveredIndex(null)
  }

  return (
    <div className="question-container">
      <div className="question-list">
        {questionData.map((item: QuestionItem, index: number) => (
          <div
            key={index}
            className={`question-item ${hoveredIndex === index ? "question-item-hover" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`question-button ${hoveredIndex === index ? "question-button-hover" : ""}`}
              onFocus={(e) => {
                e.currentTarget.classList.add("question-button-focus")
              }}
              onBlur={(e) => {
                e.currentTarget.classList.remove("question-button-focus")
              }}
            >
              <span className="question-text">{item.title}</span>
              <span className={`toggle-icon ${openIndex === index ? "toggle-icon-active" : ""}`}>
                +
              </span>
            </button>

            <div
              className={`answer-container ${openIndex === index ? "answer-container-active" : ""}`}
            >
              <div className="answer-content">
                <div className="answer-divider">
                  <p className="answer-text">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
