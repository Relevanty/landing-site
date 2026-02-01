import React from "react"

import "./OurGoals.css"

const OurGoals: React.FC = () => {
  return (
    <div className="our-goals-container">
      <div className="our-goals-header">
        <h1>Наша цель</h1>
        <ul className="our-goals-list">
          <li>
            Обеспечить каждому участнику капитал для свободной жизни (
            <a href="https://en.wikipedia.org/wiki/FIRE_movement" target="_blank">
              FIRE
            </a>
            )
          </li>
          <li>Сохранить и по возможности улучшить здоровье</li>
          <li>Создать круг людей с максимально возможным уровнем доверия</li>
        </ul>
      </div>

      <div className="our-goals-footer">
        <p>
          Это задачи, с решения которых мы начнем. Хотя мы и мечтаем о высоком, мы хорошо понимаем,
          что самые высокие стремления требуют самых прочных фундаментов. Наша цель — вместе
          построить это универсальное основание.
        </p>
        <p>При этом долгосрочные жизненные цели у каждого из участников могут быть свои.</p>
      </div>
    </div>
  )
}

export default OurGoals
