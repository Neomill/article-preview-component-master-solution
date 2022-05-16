const btnEl = document.getElementById("shareBtn");
const normalStateEl = document.getElementById("normalState");
const shareStateEl = document.getElementById("shareState");
const authorSection = document.querySelector('.card__author');
const mq = window.matchMedia( "(min-width: 850px)" );

var toggle = false;


btnEl.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("trigger")
    if(mq.matches){
        if(toggle){
            shareStateEl.style.display = "none"
            toggle = false
        }else if(toggle == false){
            shareStateEl.style.display = "flex"
            toggle = true
        }
        console.log(toggle)
    }else{
        console.log("else")
        if(toggle){
            shareStateEl.style.display = "none";
            normalStateEl.style.display = "flex";
            authorSection.style.backgroundColor = "white";
            toggle = false;
        }else{
            normalStateEl.style.display = "none" ;
            shareStateEl.style.display = "flex";
            authorSection.style.backgroundColor = "var(--very-dark-grayish-blue)";
            toggle = true;
        }
    }
})
