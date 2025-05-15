const container = document.querySelector("#container");

const numColsRows = 16;

let mouseHold = false;
let rainbow = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];
let index = rainbow.length;

document.onmousedown = () => mouseHold = true;
document.onmouseup = () => mouseHold = false;

function createDiv(row)
{
    const div = document.createElement("div");
    div.setAttribute("class", "pixel");
    div.style.opacity = 0;
    
    div.onmouseover = () => {
        if(mouseHold)
        {
            div.style.backgroundColor = cycleRainbow();
            if(div.style.opacity != '1')
                div.style.opacity -= -0.1;
        }
    };
    div.onmousedown = () => {
        div.style.backgroundColor = cycleRainbow();
        if(div.style.opacity != '1')
            div.style.opacity -= -0.1;
    }

    row.appendChild(div);
}

function createRow(colsRows)
{
    for(let i = 0; i < colsRows; i++)
    {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for(let j = 0; j < colsRows; j++)
            createDiv(row);

        container.appendChild(row);
    }

}

function cycleRainbow() {
    if(++index >= rainbow.length)
        index = 0;

    return rainbow[index];
}


createRow(numColsRows);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = 0;
    while(input <= 0 || input > 100)
        input = prompt("Enter amount of pixels per side (max 100):", 16);

    container.innerHTML = '';
    createRow(input);
})



