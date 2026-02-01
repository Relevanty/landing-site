// Import CSS for styling
import * as React from "react"

import "./FakeContent.css"





const FakeContent: React.FC = () => {
  return (
    <div className="fake-content">
      <section className="section" id="home">
        <h1>Home Section</h1>
        <p>This is the home section. Scroll down to see more content.</p>
      </section>
      <section className="section" id="about">
        <h1>About Section</h1>
        <p>This is the about section. Keep scrolling to see more content.</p>
      </section>
      <section className="section" id="services">
        <h1>Services Section</h1>
        <p>This is the services section. Continue scrolling for more content.</p>
      </section>
      <section className="section" id="contact">
        <h1>Contact Section</h1>
        <p>This is the contact section. You've reached the end of the content.</p>
      </section>
    </div>
  )
}

export default FakeContent
