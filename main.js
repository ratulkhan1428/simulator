const circle_el = document.querySelector('.circle');
const slider_el = document.querySelector('.slider-input');

slider_el.addEventListener('input', (event) => {
    circle_el.style.transform = `scale(${event.target.value/50})`;
    circle_el.innerHTML = event.target.value/50;
})