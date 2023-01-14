# Day 05

# Progress Bar via Input value

# [Source Code](https://github.com/knight070409/30Days-Of-JavaScript/tree/main/Day%2005%20-%20Progress%20Bar%20via%20Input%20value)

- How its work:- Accordingly to input value, the progress bar is filled and if we give input more than 100, the Javascript code will make its as 100.

- Demo Site link :- [Click Here](https://knight070409.github.io/30Days-Of-JavaScript/Day%2005%20-%20Progress%20Bar%20via%20Input%20value/)

- Javascript Code:-

```
const progressDone = document.getElementById("progress-done");
const progressInput = document.getElementById("progress-input");

progressInput.addEventListener("input", function() {
  if(this.value>100){
    this.value = 100;
  }
  const progress = this.value;
  progressDone.style.width = progress + "%";
});
```