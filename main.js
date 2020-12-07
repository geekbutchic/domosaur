const messWithMeWord = document.querySelector('span.mess-with-me');
const messWithMeParagraph = document.querySelector('p.mess-with-me');
const triceratops = document.querySelector('#triceratops');
const tRex = document.querySelector('#hide-me');
const feathered = document.querySelector('#feathers');
const plushTRex = document.querySelector('#rattle');
const toggle = document.querySelector('toogle');
const row = document.querySelector('row');
const ankylosaur = document.querySelector('#biggify');

messWithMeWord.style.fontSize = '3em';
messWithMeParagraph.style.backgroundColor = 'lightgreen';
triceratops.style.width = '324px';
tRex.style.display = 'none';
triceratops.style.width = '324px';


const makeOrange = () => {
    messWithMeWord.style.color = 'orange';
}

const giveRedBorder = () => {
    triceratops.style.border = '3px solid red';
}

const makeTransparent = () => {
    feathered.style.opacity = 0.5
}


const toggleSize = () => {
    if (ankylosaur.style.width === '200px') {
        ankylosaur.style.width = '162px';
    } else {
        ankylosaur.style.width = '200px';
    }
}

messWithMeWorld.addEventListener('click', function () {
    messWithMeWord.style.color = 'orange';
})

// let colorIsWhite = true;
// const toggleRowBackground = () => {
//     if (colorIsWhite) {
//     row.style.backgroundColor = 'black'
//     colorIsWhite = false;
//     }   else {
//         row.style.backgroundColor = 'white'
//         colorIsWhite = true;
//     }
// }


const toggleRowBackground = () => {
    // row.style.backgroundColor = row.style.backgroundColor === 'black' ? 'white' : 'black'
    if (row.style.backgroundColor === 'black') {
        row.style.backgroundColor = 'white'
    } else {
        row.style.backgroundColor = 'black'
    }
}

feathered.addEventListener('click', makeTransparent);
toggle.addEventListener('click', toggleRowBackground);
ankylosaur.addEventListener('mouseenter', toggleSize);
ankylosaur.addEventListener('mouseleave', toggleSize);

// function giveRedBorder(event) {
//     event.target.style.border = '3px solid red';
//     const makeOrange = () => {
//         messWithMeWord.style.color = 'orange';
//     }
// }


// // 1. query the element 
// const triceratops = document.querySelector('#triceratops');

// // 2. write the callback function 

// // 3. wire them together
// triceratops.addEventListener('click', function () {
//     triceratops.style.border = '3px solid red';
// }) 

// inline function 
// triceratops.addEventListener('click', () => triceratops.style.border = '3px solid red');




































