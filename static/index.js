const heroBox = document.querySelector('.hero_box');

let coordX;
let coordY;

const centerX = heroBox.offsetLeft + heroBox.offsetWidth / 2;
const centerY = heroBox.offsetTop + heroBox.offsetHeight / 2;

let diffX;
let diffY;

let percX;
let percY;

window.onload = function(){
    heroBox.style.borderRadius = "27% 73% 26% 74% / 66% 63% 37% 34%"
}

window.onmousemove = function(e){

    coordX = e.pageX;
    coordY = e.pageY;
 
    diffX = centerX  - coordX;
    diffY = centerY - coordY;

    percX = Math.round((diffX / window.innerWidth) * 50);
    percY = Math.round((diffY / window.innerHeight) * 50);
    
    
    heroBox.style.borderRadius = `${(50-percX)}% ${(50+percX)}% ${(50+percX)}% ${(50-percX)}% / ${(50-percY)}% ${(50-percY)}% ${(50+percY)}% ${(50+percY)}%`;
};
