function setCounter(countDownDate, dayElemId, hourElemId, minElemId, secElemId){
    if(document.getElementById(dayElemId)){
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(dayElemId).innerHTML = days;
        document.getElementById(hourElemId).innerHTML = hours;
        document.getElementById(minElemId).innerHTML = minutes;
        document.getElementById(secElemId).innerHTML = seconds;


        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(dayElemId).innerHTML = 0;
            document.getElementById(hourElemId).innerHTML = 0;
            document.getElementById(minElemId).innerHTML = 0;
            document.getElementById(secElemId).innerHTML = 0;
        }
    }
}
    


function initCountdown(countDownDate, dayElemId, hourElemId, minElemId, secElemId){
    setCounter(countDownDate, dayElemId, hourElemId, minElemId, secElemId); // do it on intialization
    return(setInterval(setCounter, 1000, countDownDate, dayElemId, hourElemId, minElemId, secElemId)); // and then every second
}