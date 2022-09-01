import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import portfolioData from "./portfolioData"

const PortfolioSection = () => {

  const portfolioItems = portfolioData.map(item =>
      (
        <a href={item.ref} 
          target="_blank" 
          rel='noreferrer'
          key={item.id}> 
          
          <img className = "portfolio-img" 
              src={require(`../img/${item.imgUrl}`)}
              alt="example"/>
        </a>
      )
    )

  
  return (
    <section className="portfolio">
      
      <h2 id="portfolio-ref">Portfolio</h2>
    
      <div className="portfolio-grid">
       {portfolioItems}
      </div>
    
  </section>
  )
}

export default PortfolioSection