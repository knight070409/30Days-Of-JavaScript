const countElement = document.getElementById('count');

let count = localStorage.getItem('count');

if (!count) {
  count = 0;
}

count++;

countElement.innerHTML = count;

localStorage.setItem('count', count);

