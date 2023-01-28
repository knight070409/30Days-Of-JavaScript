const colors = ['rgb(238, 35, 13)', 'rgb(238, 133, 13)',
 'rgb(238, 223, 13)', 'rgb(126, 238, 13)',
  'rgb(13, 238, 92)', 'rgb(13, 238, 170)', 'rgb(13, 126, 238)',
   'rgb(133, 13, 238)']

const container = document.getElementById('container');
const SquareS = 300;

for(let i = 0; i < SquareS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        SetColorElement(square)
    });

    square.addEventListener('mouseout', () => {
        RemoveColorElement(square)
    });

    container.appendChild(square);
}

function SetColorElement(its){
    const color = GetRandomColor();
    its.style.background = color;
    its.style.boxShadow =  `0 0 4px ${color}, 0 0 10px ${color}`;
}

function RemoveColorElement(its){
    const color = GetRandomColor();
    its.style.background = `black`;
    its.style.boxShadow =  `0 0 3px white`;
}

function GetRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}