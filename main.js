const slide = document.querySelector(".slide");
const layer = document.querySelector(".layer");
let counter = 1;
const slideChange = () => {
    counter === 3 ? counter = 1 : counter++;
    slide.src = `img/img${counter}.jpeg`;
    layer.src = `img/img${counter}.jpeg`;
}

setInterval(slideChange, 7000);