let interval;

function Clock() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

const start = () => {
    interval = setInterval(Clock, 1000);
}

const stop = () => {
    clearInterval(interval);
}

start();