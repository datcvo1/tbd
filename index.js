const container = document.querySelector("#container");

const numColsRows = 16;

function createDiv(row)
{
    const div = document.createElement("div");
    div.setAttribute("class", "pixel");
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

createRow(numColsRows);



