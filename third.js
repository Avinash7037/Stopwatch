let displaytimer = document.querySelector('.displaytimer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let msec = 0;
let sec = 0;
let min = 0;  

let timerId = null;

startBtn.addEventListener('click', function() {
    if(timerId!=null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
})
stopBtn.addEventListener('click', function() {

        clearInterval(timerId);
})
resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    displaytimer.innerHTML = `00 : 00 : 00`;
    msec = sec = min = 0;
})

function startTimer() {
    msec++;
    if(msec==100) {
        msec=0;
        sec++;
        if(sec==60) {
            sec = 0;
            min++;
        }
    }

    let msecString ;
    if(msec<10) {
        msecString = `0${msec}`;
    }
    else {
        msecString = msec;
    }

    let secString ;
    if(sec<10) {
        secString = `0${sec}`;
    }
    else {
        secString = sec;
    }

    let minString ;
    if(min<10) {
        minString = `0${min}`;
    }
    else {
        minString = min;
    }

    displaytimer.innerHTML = `${minString} : ${secString} : ${msecString}`;
    
}
