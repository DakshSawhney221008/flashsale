const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

let hour= 15;
let minute= 20;
let second= 60;

setInterval(()=>{
    second=second-1
    seconds.innerHTML=second
    console.log(second)
    if(second<1){
        minute=minute-1
        second=60
        minutes.innerHTML=minute
    }
    else if(minute<1){
        hour=hour-1
        minute=60
        hours.innerHTML=hour
    }
},1000)