const container = document.querySelector(".container");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const normalEl = document.querySelector(".normal");

container;

setupHourMarkings();
setupMinuteMarkings();

setInterval(() => {
    setupClockTime();
}, 1000);

function setupClockTime() {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();
    let meridian = "AM";

    if (hour > 12) {
        meridian = "PM";
        hour = hour - 12;
    }

    normalEl.innerHTML = `${hour}:${minute} ${meridian}`;

    hourEl.style.transform = `rotate(${hour * 30}deg)`;
    minuteEl.style.transform = `rotate(${minute * 6}deg)`;
    secondEl.style.transform = `rotate(${second * 6}deg)`;
}

function setupHourMarkings() {
    for (let index = 1; index <= 12; index++) {
        const hourMarking = document.createElement("div");
        hourMarking.classList.add("hour-marking");
        hourMarking.innerHTML = `<div class="hour-inner hour-inner-${index}">${index}</div>`;
        hourMarking.style.transform = `rotate(${
            index * 30
        }deg) translate(200px)`;
        container.appendChild(hourMarking);

        const hourMarkingInner = document.querySelector(`.hour-inner-${index}`);
        hourMarkingInner.style.transform = `rotate(${90 - index * 30}deg)`;
        hourMarkingInner.style.color = `green`;
    }
}

function setupMinuteMarkings() {
    for (let index = 1; index <= 60; index++) {
        const hourMarking = document.createElement("div");
        hourMarking.classList.add("minute-marking");
        hourMarking.innerHTML = `<div class="minute-inner minute-inner-${index}">I</div>`;
        hourMarking.style.transform = `rotate(${
            index * 6
        }deg) translate(230px)`;
        container.appendChild(hourMarking);

        const hourMarkingInner = document.querySelector(
            `.minute-inner-${index}`
        );
        hourMarkingInner.style.transform = `rotate(${90}deg)`;
        hourMarkingInner.style.color = `white`;
    }
}
