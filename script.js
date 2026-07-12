const startbtn = document.getElementById('start')
const cont = document.querySelector('.container')
const aboutBtn = document.querySelector('.about')
const projectsBtn = document.querySelector('.project')
const blogBtn = document.querySelector('.blog')
const socialBtn = document.querySelector('.social')

let startOn = false;

class Popups{
    constructor(className, maxclass, closeclass){
        this.reference = document.querySelector(className)
        this.close = document.querySelector(closeclass)
        this.max = document.querySelector(maxclass)
        this.windowOn = false;
        this.background = false;
    }
};
let aboutUs = new Popups('.aboutWindow', '#aboutFull', '#aboutClose')
let projectsWindow = new Popups('.projects', '#projectFull', '#projectClose')
let gameWindow = new Popups('.videogame', '#gameFull', '#gameClose')
let sudokuWindow = new Popups('.sudoku', '#sudokuFull', '#sudokuClose')
let blogWindow = new Popups('.blogs', '#blogFull', '#blogClose')
let socialWindow = new Popups('.socials', '#socialFull', '#socialClose')

startbtn.addEventListener('click', ()=>{
    if(!startOn){
        cont.style.top = '300px';
        cont.style.transform = 'scale(3)'
        if(aboutUs.windowOn||projectsWindow.windowOn){
            cont.style.zIndex = '2'
        }
        startOn = true;
    }else{
        cont.style.top = '590px';
        cont.style.transform = 'scale(0.125)'
        setTimeout(()=>{
            cont.style.zIndex = '0'
        }, 400)
        startOn = false;
    }
})
aboutBtn.addEventListener('click', ()=>{

    if(!aboutUs.windowOn){
        aboutUs.reference.style.display = 'block';
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        aboutUs.windowOn = true;
    }else{
        aboutUs.reference.style.display = 'none'
        aboutUs.windowOn = false;
    }
})
aboutUs.close.addEventListener('click', ()=>{
    aboutUs.reference.style.display = 'none';
    aboutUs.windowOn = false;
})
aboutUs.max.addEventListener('click', ()=>{
    aboutUs.reference.classList.toggle('max')
})

projectsBtn.addEventListener('click', ()=>{

    if(!projectsWindow.windowOn){
        projectsWindow.reference.style.display = 'block';
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        projectsWindow.windowOn = true;
    }else{
        projectsWindow.reference.style.display = 'none'
        projectsWindow.windowOn = false;
    }
})
projectsWindow.close.addEventListener('click', ()=>{
    projectsWindow.reference.style.display = 'none';
    projectsWindow.windowOn = false;
})
projectsWindow.max.addEventListener('click', ()=>{
    projectsWindow.reference.classList.toggle('max')
})

blogBtn.addEventListener('click', ()=>{

    if(!blogWindow.windowOn){
        blogWindow.reference.style.display = 'block';
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        blogWindow.windowOn = true;
    }else{
        blogWindow.reference.style.display = 'none'
        blogWindow.windowOn = false;
    }
})
blogWindow.close.addEventListener('click', ()=>{
    blogWindow.reference.style.display = 'none';
    blogWindow.windowOn = false;
})
blogWindow.max.addEventListener('click', ()=>{
    blogWindow.reference.classList.toggle('max')
})

socialBtn.addEventListener('click', ()=>{

    if(!socialWindow.windowOn){
        socialWindow.reference.style.display = 'block';
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        socialWindow.windowOn = true;
    }else{
        socialWindow.reference.style.display = 'none'
        socialWindow.windowOn = false;
    }
})
socialWindow.close.addEventListener('click', ()=>{
    socialWindow.reference.style.display = 'none';
    socialWindow.windowOn = false;
})
socialWindow.max.addEventListener('click', ()=>{
    socialWindow.reference.classList.toggle('max')
})
const game = document.getElementById('videoGame')
game.addEventListener('click', ()=>{
    if(!gameWindow.windowOn){
        gameWindow.reference.style.display = 'block';
        const iframe = document.getElementById('myIframe')
        iframe.src = iframe.src;
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        gameWindow.windowOn = true;
    }else{
        gameWindow.reference.style.display = 'none'
        gameWindow.windowOn = false;
    }
})
gameWindow.close.addEventListener('click', ()=>{
    gameWindow.reference.style.display = 'none';
    gameWindow.windowOn = false;
})
gameWindow.max.addEventListener('click', ()=>{
    gameWindow.reference.classList.toggle('max')
})

const sudoku = document.getElementById('sudoku')
sudoku.addEventListener('click', ()=>{
    if(!sudokuWindow.windowOn){
        sudokuWindow.reference.style.display = 'block';
        cont.style.top = '615px'
        cont.style.transform = 'scale(0.125)'
        cont.style.zIndex = '0'
        startOn = false;
        sudokuWindow.windowOn = true;
    }else{
        sudokuWindow.reference.style.display = 'none'
        sudokuWindow.windowOn = false;
    }
})
sudokuWindow.close.addEventListener('click', ()=>{
    sudokuWindow.reference.style.display = 'none';
    sudokuWindow.windowOn = false;
})
sudokuWindow.max.addEventListener('click', ()=>{
    sudokuWindow.reference.classList.toggle('max')
})