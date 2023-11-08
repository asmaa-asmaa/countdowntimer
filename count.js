let countDownDate=new Date("dec 31, 2023 23:59:59").getTime();

let counter=setInterval(()=>{

    let dateNow=new Date().getTime();
    let datediff=countDownDate-dateNow;
    let days=Math.floor(datediff/1000/60/60/24);
    //let days=Math.floor(datediff/(1000*60*60*24));

    let hours=Math.floor((datediff%(1000*60*60*24)/1000/60/60));
   // let hours=Math.floor((datediff%(1000*60*60*24)/(1000*60*60)));

   let minutes=Math.floor(datediff%(1000*60*60)/(1000*60));

   let seconds=Math.floor(datediff%(1000*60)/(1000));





    
    document.querySelector(".days").innerHTML=days;
    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".minutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds<10?` 0${seconds}`:seconds;

    if(datediff<0){
        clearInterval(counter);
        console.log("happy new year");
    }





},1000)
