import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// // DARK MODE BUTTON FUNCTION ANIMATION //

// const theme = document.querySelector("html")
// theme.classList="dark-mode"

// const bswitch = document.querySelector(".dark-mode-switch")

// const button = document.querySelector(".dark-mode-btn")

// button.addEventListener("click",function(){

//   theme.classList.toggle("light-mode")
//   bswitch.classList.toggle("light-mode-switch")
//   button.classList.toggle("light-mode-btn")
  
// })

// // WEB ANIMATIONS //

// const title = document.querySelector(".title")
// const oWebu = document.querySelector(".o-webu")
// const progress = document.querySelector(".progress")
// const portfolio = document.querySelector(".portfolio")
// const kontakt = document.querySelector(".kontakt")

// title.classList.add("fadeIn-before")
// oWebu.classList.add("slideRight-before")
// progress.classList.add("slideLeft-before")
// portfolio.classList.add("slideRight-before")
// kontakt.classList.add("slideLeft-before")

// window.addEventListener("load", function(){
//   title.classList.add("fadeIn-after")
// })


// window.addEventListener("scroll", function(){
//   let scroll = window.scrollY

//   if (scroll > 45) {
//       oWebu.classList.add("slideRight-after")  
//   }
//   if (scroll > 350) {
//       progress.classList.add("slideLeft-after")
//   }
//   if (scroll > 1200) {
//       portfolio.classList.add("slideRight-after")
//   }
//   if (scroll > 1650) {
//       kontakt.classList.add("slideLeft-after")
//   }
// })
