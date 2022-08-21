const minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      milliseconds  =document.querySelector('.milliseconds'),
      btnStart = document.querySelector('.btn_start'),
      btnPause = document.querySelector('.btn_pause'),
      btnStop = document.querySelector('.btn_stop');
let time1;
let time2;
let time3;
let count1 = 0;
let count2 = 0;
let count3 = 0;

function minutesStart() {
    time1 = setInterval(() => {
        count1++;
        minutes.innerText = count1;
    }, 60000)

    btnStop.addEventListener('click', () => {
        count1 = 0;
    })
}

function secStart() {
    time2 = setInterval(() => {
        count2++;
        seconds.innerText = count2;

        if(count2 > 60) {
            count2 = 0;
            seconds.innerText = count2;
        }
    }, 1000)

    btnStop.addEventListener('click', () => {
        count2 = 0;
    })
}

function milSecStart() {
    time3 = setInterval(() => {
        count3++;
        let count3Num = String(count3).slice(-2);
        milliseconds.innerText = count3Num;
    }, 10)

    btnStop.addEventListener('click', () => {
        count3 = 0;
    })
}

function clear() {
    clearInterval(time1)
    clearInterval(time2)
    clearInterval(time3)
}


//btn functional

btnStart.addEventListener('touchstart', () => {
    minutesStart()
    secStart()
    milSecStart()
})

btnStart.addEventListener('touchend', () => {
    clear();
})

btnStop.addEventListener('touchstart', () => {
    count1 = 0;
    count2 = 0;
    count3 = 0;
})
