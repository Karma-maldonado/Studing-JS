function createHourOfSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}

const clock = document.querySelector('.clock'); 
const start = document.querySelector('.start'); 
const stop = document.querySelector('.stop'); 
const reset = document.querySelector('.reset'); 
let segundos = 0;
let time;

function initClock(){
     time = setInterval(function(){
        clock.innerHTML = createHourOfSeconds(segundos++);
    }, 1000)
}

document.addEventListener('click', function(e){ 
    let el = e.target;
    if(el.classList.contains('reset')){
        clock.classList.remove('stop');
        clearInterval(time);
        segundos = 0;
        clock.innerHTML = '00:00:00';
    }

    if(el.classList.contains('start')){
        clock.classList.remove('stop');
        clearInterval(time);
        initClock();
    }

    if(el.classList.contains('stop')){
        clock.classList.add('stop');
        clearInterval(time);
    }
});

createHourOfSeconds();