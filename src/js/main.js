// stworzenie tablic do przechowywania produktów
const dairyList = [];
const fruitsList = [];
const sweetsList = [];
const vegetablesList = [];
const otherList = [];

// pobieranie formularza i kontenerów do list
const form = document.querySelector('form');
const ulDairy = document.querySelector('ul#dairy');
const ulFruits = document.querySelector('ul#fruits');
const ulSweets = document.querySelector('ul#sweets');
const ulVegetables = document.querySelector('ul#vegetables');
const ulOther = document.querySelector('ul#other');

// pobieranie selektorów do wyświetlenia ilości produktów 
const dairyNumber = document.querySelector('span.dairyCont');
const fruitsNumber = document.querySelector('span.fruitsCont');
const sweetsNumber = document.querySelector('span.sweetsCont');
const vegetablesNumber = document.querySelector('span.vegetablesCont');
const otherNumber = document.querySelector('span.otherCont');
const dairyItems = document.getElementsByClassName('dairy');
const fruitsItems = document.getElementsByClassName('fruits');
const sweetsItems = document.getElementsByClassName('sweets');
const vegetablesItems = document.getElementsByClassName('vegetables');
const otherItems = document.getElementsByClassName('other');
const totalItems = document.querySelector('span.totalCont');
const totalWeight = document.querySelector('span.totalWeight');
const totalPieces = document.querySelector('span.totalPieces');

// pobieranie selektorów do poszczególnych pól formularza i jednostek
const inputProductName = document.querySelector('input#productName');
const inputProductQty = document.querySelector('input#productQty');
const inputProductWeight = document.querySelector('input#productWeight');
const selectCategories = document.querySelector('select#categories');
const selectUnit = document.querySelector('select#unit');
let currentUnit = '';
let currentUnitValue = '';
let totalProductWeight = '';

// funkcja przełączająca pola jednostek
selectUnit.addEventListener('change', function () {
    if (selectUnit.value == 'kg') {
        currentUnit = 'kg';
        currentUnitValue = productWeight;
        document.querySelector('.kgCont').classList.add('hidden');
        document.querySelector('.sztCont').classList.remove('hidden');
    }
    else if (selectUnit.value == 'szt') {
        currentUnit = 'szt';
        currentUnitValue = productQty;
        document.querySelector('.sztCont').classList.add('hidden');
        document.querySelector('.kgCont').classList.remove('hidden');
    }
})
// funkcja dodawania produktu do odpowiedniej kategorii
const addProduct = (e) => {
    e.preventDefault();
    const productName = inputProductName.value;

    if (selectCategories.selectedIndex == '1') {
        const dairy = document.createElement('li');
        dairy.className = 'dairy';
        dairy.innerHTML = `${productName} [${currentUnitValue.value} ${currentUnit}] <button>Usuń</button>`;
        dairyList.push(dairy);
        ulDairy.appendChild(dairy);
        dairy.querySelector('button').addEventListener('click', removeDairy);
    }
    else if (selectCategories.selectedIndex == '2') {
        const fruits = document.createElement('li');
        fruits.className = 'fruits';
        fruits.innerHTML = `${productName} [${currentUnitValue.value} ${currentUnit}] <button>Usuń</button>`;
        fruitsList.push(fruits);
        ulFruits.appendChild(fruits);
        fruits.querySelector('button').addEventListener('click', removeFruits);
    }
    else if (selectCategories.selectedIndex == '3') {
        const sweets = document.createElement('li');
        sweets.className = 'sweets';
        sweets.innerHTML = `${productName} [${currentUnitValue.value} ${currentUnit}] <button>Usuń</button>`;
        sweetsList.push(sweets);
        ulSweets.appendChild(sweets);
        sweets.querySelector('button').addEventListener('click', removeSweets);
    }
    else if (selectCategories.selectedIndex == '4') {
        const vegetables = document.createElement('li');
        vegetables.className = 'vegetables';
        vegetables.innerHTML = `${productName} [${currentUnitValue.value} ${currentUnit}] <button>Usuń</button>`;
        vegetablesList.push(vegetables);
        ulVegetables.appendChild(vegetables);
        vegetables.querySelector('button').addEventListener('click', removeVegetables);
    }
    else if (selectCategories.selectedIndex == '5') {
        const other = document.createElement('li');
        other.className = 'other';
        other.innerHTML = `${productName} [${currentUnitValue.value} ${currentUnit}] <button>Usuń</button>`;
        otherList.push(other);
        ulOther.appendChild(other);
        other.querySelector('button').addEventListener('click', removeOther);
    }
    else { return }
    // czyszczenie pól formularza i update ilości produktów
    inputProductName.value = '';
    inputProductQty.value = '';
    inputProductWeight.value = '';
    selectCategories.value = '';
    selectUnit.value = '';
    document.querySelector('.kgCont').classList.add('hidden');
    document.querySelector('.sztCont').classList.add('hidden');
    counter();
}

// funkcje usuwania pojedyńczych elementów z updatem ilości produktów
const removeDairy = (e) => {
    const index = e.target.parentNode.dataset.key;
    dairyList.splice(index, 1);
    (function () {
        ulDairy.textContent = "";
        dairyList.forEach((el, key) => {
            el.dataset.key = key;
            ulDairy.appendChild(el);
        })
        counter();
    })();
}

const removeFruits = (e) => {
    const index = e.target.parentNode.dataset.key;
    fruitsList.splice(index, 1);
    (function () {
        ulFruits.textContent = "";
        fruitsList.forEach((el, key) => {
            el.dataset.key = key;
            ulFruits.appendChild(el);
        })
        counter();
    })();
}

const removeSweets = (e) => {
    const index = e.target.parentNode.dataset.key;
    sweetsList.splice(index, 1);
    (function () {
        ulSweets.textContent = "";
        sweetsList.forEach((el, key) => {
            el.dataset.key = key;
            ulSweets.appendChild(el);
        })
        counter();
    })();
}

const removeVegetables = (e) => {
    const index = e.target.parentNode.dataset.key;
    vegetablesList.splice(index, 1);
    (function () {
        ulVegetables.textContent = "";
        vegetablesList.forEach((el, key) => {
            el.dataset.key = key;
            ulVegetables.appendChild(el);
        })
        counter();
    })();
}

const removeOther = (e) => {
    const index = e.target.parentNode.dataset.key;
    otherList.splice(index, 1);
    (function () {
        ulOther.textContent = "";
        otherList.forEach((el, key) => {
            el.dataset.key = key;
            ulOther.appendChild(el);
        })
        counter();
    })();
}

// funkcja liczenia ilości produktów
const counter = () => {
    dairyNumber.textContent = dairyItems.length;
    fruitsNumber.textContent = fruitsItems.length;
    sweetsNumber.textContent = sweetsItems.length;
    vegetablesNumber.textContent = vegetablesItems.length;
    otherNumber.textContent = otherItems.length;
    totalItems.textContent = dairyItems.length + fruitsItems.length + sweetsItems.length + vegetablesItems.length + otherItems.length;
}

form.addEventListener('submit', addProduct);


