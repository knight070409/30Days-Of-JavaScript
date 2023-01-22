let password = document.getElementById('password');
let line = document.getElementById('line');

password.oninput = function() {
    let point = 0;
    let value = password.value;
    let widthPower = ['1%', '25%', '50%', '75%', '100%'];
    let colorPower = ['#d50909', '#bd4935', '#f2df4f', '#b2e436', '#1e9d05'];

    if(value.length >= 1){
        let arrayTest = [
            /[0-9]/,
            /[a-z]/,
            /[A-Z]/,
            /[^0-9a-zA-Z]/
        ];
        arrayTest.forEach(item => {
            if(item.test(value)){
                point += 1;
            }
        });

    }
    line.style.width = widthPower[point];
    line.style.backgroundColor = colorPower[point];
}