const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentWords = 0;

indicators.forEach((item, i)=>{
    item.addEventListener('click', () =>{
         indicators[currentWords].classList.remove('active');
         wrapper.style.marginLeft = '-${100 * i}%';
         item.classList.add('active');
         currentWords = i;
    })

}) 