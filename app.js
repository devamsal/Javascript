// console.log("Testing");
const deg = 6;
const hour = document.querySelector('.h');
const mintue = document.querySelector('.m');
const second = document.querySelector('.s');
const date = document.querySelector(".date");
const am_pm = document.querySelector(".am")

setInterval(() => {

    const today = new Date();
    const h1 = today.getHours() * 30;
    const m1 = today.getMinutes() * deg;
    const s1 = today.getSeconds() * deg;
    const today_Date = today.toDateString();
    const a1 = "AM"

    
    
    hour.style.transform = `rotateZ(${(h1)+(m1/12)}deg)`;
    mintue.style.transform = `rotateZ(${m1}deg)`;
    second.style.transform = `rotateZ(${s1}deg)`;
    date.innerHTML = today_Date;
    am_pm.innerHTML = h1 > 12 ? 'PM' : 'AM';

}, 1000);


