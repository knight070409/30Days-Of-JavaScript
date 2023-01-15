const text = document.getElementById('heading');

const sent = 'Don`t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.';

let word = 1;

setInterval(writeText,150);

function writeText(){
    text.innerHTML = sent.slice(0,word);
    word++;

    if(word>sent.length){
        word = 1;
    }
}