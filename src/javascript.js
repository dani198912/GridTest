let hoursContainer = document.getElementsByClassName("hours-container");



for(let i = 0; i < hoursContainer.length; i++) {
    console.log("Inside hours-container");
    for (let s = 0; s < 24; s++) {
        const span = document.createElement("span");
        span.style.gridColumn = `${s+1}`;
        hoursContainer[i].appendChild(span);
        
    }
    for (let k = 0; k < 24; k++) {
        let hours = document.createElement("div");
        hours.className = "hour";
        hours.innerText = `${k < 10 ? "0" + k : k%24}:00`;
        hours.style.gridColumn = `${k+1}`;
        console.log(`At ${k}`);
        hoursContainer[i].appendChild(hours);        
    }
    for (let t = 2; t < 6; t++) {
        let task = document.createElement("div");
        task.className = "task";
        task.innerText =`The task ${t} is here`;
        task.style.gridRow = `${t}`;
        task.style.background = "#b03532";
        task.style.gridColumn = `${t} /  ${t*2}`;
        hoursContainer[i].appendChild(task);

        
    }
};

