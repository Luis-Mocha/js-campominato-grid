let main = document.querySelector('main');
let playDiv = document.querySelector('#playDiv');
let form = document.querySelector('form');
 
// creo il change dfiiculty button
let changeDiffBtn = myElementFunction('button', 'changeDiffBtn', 'text-uppercase my-3 d-block mx-auto');
changeDiffBtn.innerHTML = 'Change DIfficulty';

// Clicco Play
form.addEventListener('submit', function(invioForm) {
    invioForm.preventDefault();

    // nascondo il tasto play e creo il tasto 'change difficulty'
    playDiv.classList.add('d-none');

    // let changeDiffBtn = myElementFunction('button', 'changeDiffBtn', 'text-uppercase my-3 d-block mx-auto');
    // changeDiffBtn.innerHTML = 'Change DIfficulty';
    this.append(changeDiffBtn);

    // creo il div grid
    let grid = myElementFunction('div', 'grid', 'd-flex flex-wrap');
    main.append(grid);

    let difficultyInput = document.querySelector('#difficultyInput').value;
    console.log(difficultyInput)

    if (difficultyInput == 'easy') {
        createGrid(100, difficultyInput);
    }
    else if (difficultyInput == 'medium') {
        createGrid(81, difficultyInput);
    }
    else {
        createGrid(49, difficultyInput);
    }; 
});


// Tasto per refreshare e cambiare difficoltà
changeDiffBtn.addEventListener('click', function() {
    alert(`Changing difficulty will cause you to lose all progress.
    Well anyway it's too late now.`)
    location.reload()
})



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
// il parametro difficulty corrisponde alla stringa 'easy','medium' o 'hard', serve ad associare la classe e le corrispondenti caratteristiche css.

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

    // Cambio stile e informazione numero al click
    for (let i = 0; i <= boxArray.length; i++) {
        boxArray[i].addEventListener('click', function() {
            this.classList.toggle('box-clicked')
            console.log(this.innerHTML)
        });
    };
}



// necessario per inizializzare i tooltip Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))