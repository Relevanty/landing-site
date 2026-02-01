import * as React from "react"

import Image from "@/components/image/Image"

import "./AboutUs.css"

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Кто такие Релеванты</h2>
        <p>
          <strong>
            Привет! Мы собираем людей, стремящихся добиться в жизни чего-то большего, чтобы
            объединиться в команду и вместе построить «стартовую площадку» для каждого из нас.
          </strong>
        </p>
        <div className="about-us-photo-mobile">
          <Image src="/images/group_photo.webp" alt="About Us" />
        </div>
        <p>
          «Стартовая площадка» универсальна: диверсифицированный капитал, крепкое здоровье и
          проверенные временем партнёры-единомышленники, всегда готовые прийти на помощь. Для этого
          мы тщательно отбираем людей, стремительно развиваемся в личном, профессиональном и
          социальном направлениях и делаем большой упор на взаимоподдержку и командную работу.
          <br />
          <br />
          Наши требования к участникам довольно высоки, и можно смело сказать, что Релеванты — это
          стиль жизни.
        </p>
      </div>
      <div className="about-us-photo">
        <Image src="/images/group_photo.webp" alt="About Us" aspectRatio={1} />
      </div>
    </div>
  )
}

export default AboutUs
