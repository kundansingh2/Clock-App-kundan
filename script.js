let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

// we using setinterval for time updateing
setInterval(()=>{
    let currentTime = new Date();

    hrs.innerText = (currentTime.getHours()< 10 ? "0" : "") +currentTime.getHours();
    mins.innerText = (currentTime.getMinutes()< 10 ? "0" : "") +currentTime.getMinutes();
    secs.innerText = (currentTime.getSeconds()< 10 ? "0" : " ") +currentTime.getSeconds();

}, 1000);



















/*
//when we using thing thing time does not update we can chek time then we refresh button then see time 

let currentTime = new Date();

hrs.innerText = currentTime.getHours();
mins.innerText = currentTime.getMinutes();
secs.innerText = currentTime.getSeconds();
*/



















/*
this is for checking hours mins secns
console.log(currentTime);
console.log(currentTime.getHours());
console.log(currentTime.getMinutes())
console.log(currentTime.getSeconds());
*/

