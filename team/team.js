
let textElement = document.querySelector('p')
textElement.addEventListener('mouseover', () =>{
    document.getElementById('text').style.fontSize= '40px';
    document.getElementById('text').style.color= 'rgb(236, 18, 236)';
});

textElement.addEventListener('mouseout', () =>{
    document.getElementById('text').style.fontSize= '30px';
    document.getElementById('text').style.color= 'rgb(14, 1, 26)';
});
