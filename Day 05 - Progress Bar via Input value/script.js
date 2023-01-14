const progressDone = document.getElementById("progress-done");
const progressInput = document.getElementById("progress-input");

progressInput.addEventListener("input", function() {
  if(this.value>100){
    this.value = 100;
  }
  const progress = this.value;
  progressDone.style.width = progress + "%";
});
