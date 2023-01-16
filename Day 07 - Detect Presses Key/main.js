const output = document.getElementById('output');

window.addEventListener('keydown', (e) => {
    let key = e.key;
    let code = e.keyCode;
    output.innerHTML = `<div><span>Presses key is </span> ${key}</div>
                        <div><span>Keycode :</span> ${code}</div>`
})

