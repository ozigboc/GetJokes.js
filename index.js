
const joke = document.querySelector('#joke');
const url = 'https://icanhazdadjoke.com/';

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
  joke.innerHTML = `<h1>${this.responseText}</h1>`;

});

refresBtn.addEventListener('click', function() {
  xhr.open('GET', url);
xhr.setRequestHeader('Accept', 'text/plain');
xhr.send();
})


