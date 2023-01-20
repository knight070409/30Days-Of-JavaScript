let button = document.getElementById('button');

function shuffle() {
    const img = document.getElementById('img');
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `img/${random}.png`);
};

button.onclick = function animat() {
    setTimeout(shuffle, 750);
    const img = document.getElementById('img');
    img.setAttribute("src", `img/diceRoll.gif`);
}