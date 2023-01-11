
# Day 02

# Weight Converter

# [Source Code](https://github.com/knight070409/30Days-Of-JavaScript/tree/main/Day%2002%20-%20Weight%20Converter)


- Site link :- [Click Here](https://knight070409.github.io/30Days-Of-JavaScript/Day%2002%20-%20Weight%20Converter/)

- Javascript Code:-
```
const input = document.getElementById('input');
const type = document.getElementById('type');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', function() {
  const weight = input.value;
  const conversionType = type.value;

  let result;
  if (conversionType === 'Pounds') {
    result = weight * 2.20462;
  } else if (conversionType === 'Grams') {
    result = weight * 1000;
  } else if (conversionType === 'Ounces') {
    result = weight * 35.274;
  } else if (conversionType === 'Stones') {
    result = weight * 0.157473;
  }

  output.innerHTML = `${weight} kg  is ` + result + ' ' + conversionType;
});

```
  