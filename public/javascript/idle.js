var timeoutInMiliseconds = 60000;
var timeoutId; 
 
function startTimer() { 
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function doInactive() {
    logout();
}
function resetTimer() { 
    window.clearTimeout(timeoutId)
    startTimer();
}

function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
     
    startTimer();
}

setupTimers();