window.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (f) {
        setTimeout(f, 1000 / 60)
    };

const sky = document.getElementById('sky')
const clouds = document.getElementById('clouds')

const logo = document.getElementById('logo')

const mountains = document.getElementById('mountains')
const beach = document.getElementById('beach')
const kids = document.getElementById('kids')
const tree = document.getElementById('tree')
const bird = document.getElementById('bird')

const manLeft = document.getElementById('manLeft')
const manRight = document.getElementById('manRight')
const scuba = document.getElementById('scuba')

const house = document.getElementById('house')
const heading = document.getElementById('heading')


const viewportHeight = 2886;
let layer1 = 0.2;
let layer2 = 0.15;
let layer3 = 0.2;
let layer4 = 0.14;


function calculateVH(pixel) {
    return pixel/viewportHeight * 200;
}

function parallaxbubbles() {
    const scrolltop = window.pageYOffset;
    sky.style.top = -(scrolltop * layer1) + 'vh';
    clouds.style.top = calculateVH(45) -(scrolltop * layer1) + 'vh';
    mountains.style.top = calculateVH(305) - (scrolltop * layer2)  + 'vh';
    beach.style.top = calculateVH(581) - (scrolltop* layer3)  + 'vh';
    scuba.style.top = calculateVH(561) - (scrolltop * layer3)  + 'vh';
    logo.style.top = calculateVH(186) -(scrolltop * layer4) + 'vh';
    tree.style.top = calculateVH(193) - (scrolltop * layer4)  + 'vh';
    bird.style.top = calculateVH(354) - (scrolltop * layer4)  + 'vh';
    kids.style.top = calculateVH(464) - (scrolltop * layer4)  + 'vh';
    manLeft.style.top = calculateVH(522) - (scrolltop * layer4)  + 'vh';
    manRight.style.top = calculateVH(506) - (scrolltop * layer4)  + 'vh';
    house.style.top = calculateVH(461) - (scrolltop * layer4)  + 'vh';
}

window.addEventListener('scroll', function () {
    if (window.innerWidth > 576) {
        layer1 = 0.2;
        layer2 = 0.15;
        layer3 = 0.2;
        layer4 = 0.14;
        requestAnimationFrame(parallaxbubbles)
    }
}, false);
