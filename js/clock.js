const clock = document.querySelector("#clock");

function getClock(params) {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};


getClock()
setInterval( getClock , 1000); 

// 5000 -> 5초
