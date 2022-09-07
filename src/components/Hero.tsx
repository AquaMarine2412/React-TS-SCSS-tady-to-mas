import React from 'react'

type HeroProps = {
  darkMode: boolean
}

const Hero = (props: HeroProps) => {
  return (
    <section id="home-ref" className="hero">

      <h1 className={props.darkMode ? "hero-title" : "hero-title hero-title-light"}>
        Tady <span>To Máš!</span>
      </h1>
    
    </section>
  )
}

export default Hero