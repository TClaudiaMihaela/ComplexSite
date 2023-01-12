let bgColor= document.querySelector(".js-bgColor");
let textColor= document.querySelector(".js-textColor");
let fontSize= document.querySelector(".js-fontSize");
let body = document.querySelector("body");

bgColor.addEventListener('keyup', function(event) {
    body.style.backgroundColor = event.target.value;
});

textColor.addEventListener('keyup', function(event) {
    body.style.color = event.target.value;
});

fontSize.addEventListener('keyup', function(event) {
    body.style.fontSize = event.target.value + 'px';
});

