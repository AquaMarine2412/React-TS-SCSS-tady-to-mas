const head = document.querySelector(".head")
const body = document.querySelector(".body")
const mouth = document.querySelector(".mouth")
const meow = [new Audio('./meow0.mp3'), new Audio('./meow1.mp3'), new Audio('./meow2.mp3'), new Audio('./meow3.mp3'), new Audio('./meow4.mp3')]
const purr = [new Audio('./purr0.mp3'), new Audio('./purr1.mp3'), new Audio('./purr2.mp3')]

head.addEventListener("click", function(){

    meow[Math.floor(Math.random() * 5)].play()

    mouth.style.top="43.5%" 

    setTimeout(function(){

        mouth.style.top="42.5%" 

    }, 900);
    
})

body.addEventListener("click", function(){
    
    purr[Math.floor(Math.random() * 3)].play()
})

//FADE IN ANIMATION //

const cat = document.querySelector(".cat")

cat.classList.add("fadeIn-before")

window.addEventListener("load", function(){
   
    cat.classList.add("fadeIn-after")
})