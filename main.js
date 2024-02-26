const stopWatchDuration = document.getElementById("duration"),
      start = document.getElementById("start"),
      lap = document.getElementById("lap"),
      pause = document.getElementById("pause"),
      reset = document.getElementById("reset"),
      laps = document.getElementById("laps");


let hrs = 0, 
    mins = 0,
    sec = 0,
    ms = 0,
    timeInterval;
    
      
      
start.onclick = () => {
    timeInterval = setInterval(() => {
        ms++;
        if(ms == 100) {
            sec += 1;
            ms = 0;
        }
        if(sec == 60) {
            mins += 1;
            sec = 0;
        }
        if(mins == 60) {
            hrs += 1;
            mins = 0;
        }

        stopWatchDuration.innerHTML = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;

    }, 10);

    start.style.display = "none";
    pause.style.display = "block";
    lap.style.display = "block";
    reset.style.display = "none";

    lap.removeAttribute("disabled");
};

const zeroPad = (num) => {
    return String(num).padStart(2, "0");
}

let count = 0;
lap.onclick = () => {
    count += 1;
    let li = document.createElement("li");
    li.innerHTML = `${"#" + count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({ top: laps.scrollHeight, behavior: "smooth" });
};

pause.onclick = () => {
    clearInterval(timeInterval);

    lap.style.display = "none";
    reset.style.display = "block";
    start.style.display = "block";
    start.innerHTML = "Resume";
    pause.style.display = "none";
};

reset.onclick = () => {
    laps.innerHTML = "";
    hrs = mins = sec = ms = count = 0;
    clearInterval(timeInterval);
    stopWatchDuration.innerHTML = "00:00:00:00";

    start.innerHTML = "Start";
    lap.style.display = "block";
    reset.style.display = "none";
    start.style.display = "block";
    pause.style.display = "none";
};
