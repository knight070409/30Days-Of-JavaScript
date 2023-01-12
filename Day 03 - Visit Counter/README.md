# Day 03

# Visit Counter

# [Source Code](https://github.com/knight070409/30Days-Of-JavaScript/tree/main/Day%2003%20-%20Visit%20Counter)

- How its work:-  Basically use localstorage so its can store that how many times specific devices visit the site and last we have display the number of visits.

- Site link :- [Click Here](https://knight070409.github.io/30Days-Of-JavaScript/Day%2003%20-%20Visit%20Counter/)

- Javascript Code:-

```
const countElement = document.getElementById('count');

let count = localStorage.getItem('count');

if (!count) {
  count = 0;
}

count++;

countElement.innerHTML = count;

localStorage.setItem('count', count);
```