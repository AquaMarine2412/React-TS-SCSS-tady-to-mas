import React from 'react'

type FooterProps = {
  darkMode: boolean
}

const Footer = (props:FooterProps) => {
  return (
    
    <footer className={props.darkMode? "footer" : "footer footer-light"}>
               
      <p className={props.darkMode? "copy" : "copy copy-light"}>{`©${new Date().getFullYear()} TADY TO MÁŠ`}</p>

    </footer>
  )
}

export default Footer