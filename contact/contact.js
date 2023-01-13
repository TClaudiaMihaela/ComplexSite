let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let country = document.getElementById('country')
let subject = document.querySelector('#subject')
let jsText = document.querySelector('.jsText')

let button = document.querySelector('.submit')

button.addEventListener('click', function (event) {
    let text = "Hello " + firstName.value + " " + lastName.value + " from " + country.value + ", we received your subject: \n " + subject.value + "!";
    jsText.innerHTML = text;
});