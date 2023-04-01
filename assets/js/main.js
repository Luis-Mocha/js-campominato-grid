let main = document.querySelector('main');
let btnEasy = document.querySelector('#btnEasy');
let btnMedium = document.querySelector('#btnMedium');
let btnHard = document.querySelector('#btnHard');

// creo il div grid
let grid = myElementFunction('div', 'grid', 'd-flex flex-wrap');
main.append(grid);


/* --- GRIGLIA EASY --- */
btnEasy.addEventListener('click', function () {
    createGrid(100, 'easy');
});



/* --- GRIGLIA MEDIUM --- */
btnMedium.addEventListener('click', function () {
    createGrid(81, 'medium');
});


/* --- GRIGLIA HARD --- */
btnHard.addEventListener('click', function() {
    createGrid(49, 'hard');
});



/* --- MY FUNCTIONS --- */

function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );        
};

function shuffleFunction(array) {
    return array.sort(() => Math.random() - 0.5);
};


// -- Funzione per creare elementi html e assegnare loro id e classe
function myElementFunction(tagHtml, idElemento, classiElemento) {
    nomeElemento = document.createElement(tagHtml);
    nomeElemento.id = idElemento;
    nomeElemento.className = classiElemento;
    
    return nomeElemento;
};


// -- Funzione per creare le griglie
// Il parametro difficulty corrisponde alla stringa 'easy','medium' o 'hard', serve ad associare la classe e le corrispondenti caratteristiche css

function createGrid(numberBoxes, difficulty) {
    // Ciclo per creare x caselle e un array con x numeri
    let numbersList = [];

    for (let i = 0; i < numberBoxes; i++) {

        grid.innerHTML += 
        `
        <div class="box box-${difficulty} box-${i+1} d-flex align-items-center justify-content-center">
        
        </div>
        `;

        // array x
        numbersList.push(i + 1);
    }
    let boxArray = document.querySelectorAll('.box');
    // console.log(boxArray);
    console.log(numbersList)

    // creo una lista di numeri da 1 a x ordinati casualmente, e li inserisco nei box 
    let randomNumbersList = shuffleFunction(numbersList);
    console.log(randomNumbersList);

    for (let i = 0; i < randomNumbersList.length; i++) {

        boxArray[i].innerHTML = `${randomNumbersList[i]}`;

    };

    let gridinfo = myElementFunction('div', 'gridInfo', 'd-flex flex-wrap mt-4 row');
    gridinfo.innerHTML = `<h2 class="text-center">Numeri cliccati:</h2>`;
    main.append(gridinfo);

    // Cambio stile e informazione numero al click
    for (let i = 0; i <= boxArray.length; i++) {
        boxArray[i].addEventListener('click', function() {
            this.classList.toggle('box-clicked')
            console.log(this.innerHTML)

            let info = document.createElement('div');
            main.append(info);
            gridinfo.innerHTML += `<span class="mx-2 my-1 col-1 text-center">${this.innerHTML}</span>`;
        });
    };
}



// necessario per inizializzare i tooltip Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))