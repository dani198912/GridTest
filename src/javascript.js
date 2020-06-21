let hoursContainer = document.getElementsByClassName("hours-container");



for(let i = 0; i < hoursContainer.length; i++) {
    console.log("Inside hours-container");
    for (let k = 0; k < 24; k++) {
        let hours = document.createElement("div");
        hours.className = "hour";
        hours.innerText = `${k < 10 ? "0" + k : k}:00`;
        console.log(`At ${k}`);
        hoursContainer[i].appendChild(hours);        
    }
};

