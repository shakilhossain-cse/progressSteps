const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeItem = 1;

nextBtn.addEventListener('click',()=>{
    activeItem++
    if (activeItem > circles.length) {
        activeItem = circles.length
    }
    update()
})

prevBtn.addEventListener('click',()=>{
    activeItem--
    if (activeItem < 1) {
        activeItem = 1
    }
    update()
})

function update() {
    circles.forEach((circle,index) => {
       if (index < activeItem) {
           circle.classList.add('active')
       }else{
           circle.classList.remove('active')
       }
    })
    const actives = document.querySelectorAll('.active');
    const progressData = ((actives.length - 1) / (circles.length - 1)) * 100
    progress.style.width = progressData + '%';
    if (activeItem == 1) {
        prevBtn.disabled = true;
    }else if(activeItem == circles.length){
        nextBtn.disabled = true;
    }else{
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
}