const dot = document.querySelectorAll('.dot');
const nav = document.querySelector('.scroll-nav')
const scrolling = document.querySelectorAll('.scroll-block')
const scrollingLine = document.querySelector('.scroll-line')
const burgerContent  = document.querySelector('.burger-content')
const burger = document.querySelector('.burger-img')
const cross = document.querySelector('.burger-img-2')
const linehead = document.querySelectorAll('.h-card')
const dotL = document.querySelectorAll('.dotL')

function removeBlocks(){
    scrolling.forEach(item => item.style.display = 'none');
}

nav.addEventListener("click",event =>{
    
    if(event.target.classList.contains('dot')){
        dot.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    }
    if(event.target.classList.contains('dot1')){
        removeBlocks();
        document.querySelector('.scroll-all-1').style.display = "flex";
    }else if(event.target.classList.contains('dot2')){
        removeBlocks();
        document.querySelector('.scroll-all-2').style.display = "flex";
    }else if(event.target.classList.contains('dot3')){
        removeBlocks();
        document.querySelector('.scroll-all-3').style.display = "flex";
    }
})

burger.addEventListener('click', ()=>{
    burger.style.display = "none";
    cross.style.display = "block";
    burgerContent.classList.add('visible');
})

cross.addEventListener('click', ()=>{
    burger.style.display = "block";
    cross.style.display = "none";
    burgerContent.classList.remove('visible');
})

function removeLines(){
    linehead.forEach(item => item.style.display = 'none');
}

scrollingLine.addEventListener("click",event =>{
    
    if(event.target.classList.contains('dotL')){
        dotL.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    }
    if(event.target.classList.contains('dotL1')){
        removeLines();
        document.querySelector('.h-card-1').style.display = "block";
        document.querySelector('.h-card-1').style.height = "536px";
    }else if(event.target.classList.contains('dotL2')){
        removeLines();
        document.querySelector('.h-card-2').style.display = "block";
        document.querySelector('.h-card-2').style.height = "536px";
    }else if(event.target.classList.contains('dotL3')){
        removeLines();
        document.querySelector('.h-card-3').style.display = "block";
        document.querySelector('.h-card-3').style.height = "536px";
    }
})