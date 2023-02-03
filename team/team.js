
let textElement = document.querySelector('p')
textElement.addEventListener('mouseover', () =>{
    document.getElementById('text').style.fontSize= '35px';
    document.getElementById('text').style.color= '#000';
});

textElement.addEventListener('mouseout', () =>{
    document.getElementById('text').style.fontSize= '30px';
    document.getElementById('text').style.color= '#fff';
});
