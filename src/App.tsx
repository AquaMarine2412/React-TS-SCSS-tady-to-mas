import React, { useEffect, useState } from 'react';
import './style/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import OWebuSection from './components/OWebuSection';
import ProgressTable from './components/ProgressTable';
import PortfolioSection from './components/PortfolioSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {

  const [darkMode, setDarkMode] = useState(true)

  function darkModeSwitch(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  useEffect(() => {
    document.body.classList.toggle('light');
  },[darkMode])

  return (
    <div className={darkMode ? "App" : "App App-light"}>
      <Header darkMode={darkMode} handleClick={darkModeSwitch}/>
      <main>
        <Hero darkMode={darkMode}/>
        <OWebuSection/>
        <ProgressTable darkMode={darkMode}/>   
        <PortfolioSection/>
        <ContactForm/>  
      </main>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
