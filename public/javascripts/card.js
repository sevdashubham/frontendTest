document.getElementById('div-card-image').addEventListener("mouseover", onHover);
document.getElementById('div-card-image').addEventListener("mouseout", offHover);
const cardImage = document.getElementById('card-image');
const titleCard = document.getElementById('title-card');

function onHover() {
    cardImage.src = 'images/35.png';
    cardImage.style.height = '130px';
    cardImage.style.width = '130px';
    cardImage.style.padding = '15px';
    titleCard.style.color = '#FFFFFF';
}

function offHover() {
    cardImage.src = 'images/11.png';
    cardImage.style.height = '130px';
    cardImage.style.width = '130px';
    cardImage.style.padding = '30px';
    titleCard.style.color = '#4f4e4d';
}


cardImage.addEventListener("onmouseenter", function (event) {
    onHover();
    setTimeout(function () {
        offHover();
    }, 500);
}, false);

cardImage.addEventListener("onmouseover", function (event) {
    onHover();
    console.log('hellooo');
    setTimeout(function () {
        offHover();
    }, 500);
}, false);
