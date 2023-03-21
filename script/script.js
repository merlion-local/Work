const slider = document.querySelector('.slider');
const line = slider.querySelector('.line');
const screen = slider.querySelector('.screen');
const triggerContainer = slider.querySelector('.trigger_container');
const [leftTrigger, rightTrigger] = triggerContainer.querySelectorAll('button');
const dotsContainer = slider.querySelector('.dots');
const ACTIVE = 'active';

let slide = 0;
const step = screen.offsetWidth + 50;
const totalLine = line.offsetWidth;
const dotsCount = Math.floor(totalLine / step);

function scroll(){
    line.style.left = -slide * step + 'px';
    dots.forEach(item => item.classList.remove(ACTIVE));
    dots[slide].classList.add(ACTIVE);
}


leftTrigger.addEventListener('click', ()=>{
    if (slide === 0) return 
    slide--;
    scroll();
})

rightTrigger.addEventListener('click', ()=>{
    if (slide === dotsCount-1) return 
    slide++;
    scroll();
})

const dots = [...new Array(dotsCount)].map((_, i) => {
    const dot = document.createElement('li');
    dot.classList.add(i === 0 && ACTIVE);

    dot.addEventListener('click', ()=>{
        slide = i;
        scroll();
    })
    return dot
})

dotsContainer.append(...dots);
