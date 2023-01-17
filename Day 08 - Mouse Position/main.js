const output = document.getElementById('output');

window.addEventListener('mousemove',(e) => {
    let xposition = e.clientX;
    let yposition = e.clientY;
    output.innerHTML = `<div><span>X :</span> ${xposition}</div>
                        <div><span>Y :</span> ${yposition}</div>`
})                      