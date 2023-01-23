let hours = document.querySelector(".hours span");
let minutes = document.querySelector(".minutes span");
let seconds = document.querySelector(".seconds span");
let meridiem = document.querySelector(".meridiem span")

let time = setInterval(() => {
    let currentTime = new Date();

    let hoursValue = currentTime.getHours();
    // let hoursValue = 1;
    hours.innerHTML = hoursValue;

    let minutesValue = currentTime.getMinutes();
    // let minutesValue = 5;
    minutes.innerHTML = minutesValue;

    let secondsValue = currentTime.getSeconds();
    // let secondsValue = 9;
    seconds.innerHTML = secondsValue;

    if (hoursValue < 10) {
        hours.innerHTML = "0" + hoursValue;
    }

    if (minutesValue < 10) {
        minutes.innerHTML = "0" + minutesValue;
    }

    if (secondsValue < 10) {
        seconds.innerHTML = "0" + secondsValue;
    }

    if (hoursValue > 11) {
        meridiem.innerHTML = "PM";
    } else {
        meridiem.innerHTML = "AM";
    }
}, 1000)
