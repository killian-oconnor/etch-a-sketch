const container = document.querySelector('#container');
console.log(container);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', reset);

let squareWidth = "75px";

function reset() {
    let divz = document.querySelectorAll('div');
        divz.forEach((div) => {
        div.style.backgroundColor = 'white';
      });
      container.innerHTML = '';
      squares = parseInt(prompt("Please enter new size for your Etch-a-Sketch", 16));
      while (squares > 100) {
        squares = prompt("Please enter new size for your Etch-a-Sketch", 16);
      }
      squareWidth = (Math.round(1200 / squares) + "px")
      createGrid(squares);
    }

function createGrid(squares) {
    // for rows in height:
    //      create row
    //      for cols in width:
    //          create col

    // <div class="row">
    //     <div class="col-sm">
    //     One of three columns
    //     </div>
    //     <div class="col-sm">
    //     One of three columns
    //     </div>
    //     <div class="col-sm">
    //     One of three columns
    //     </div>
    // </div>

    for (i = 0; i< squares; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);
        console.log("row " + row);
        row.style.flexWrap = 'nowrap';
        row.classList.add("g-0");
        //row.style.--bs-gutter-x = 0;
        for (ii = 0; ii < squares; ii++) {
            const col = document.createElement('div');
            //col.classList.add("col-sm");
            //col.textContent = "Column";
            col.style.border = '1px solid black';
            //col.style.flexWrap = 'nowrap';
            col.style.width = squareWidth;
            col.style.height = col.style.width;
            col.addEventListener('mouseover', function() {
                col.style.backgroundColor = 'black'
            })
            row.appendChild(col);
            console.log("col " + col);
        }
    }

}
let squares = 16;
createGrid(squares);