const searchForm = document.querySelector('#search');
const sortByName = document.querySelector('#sortByName');
const sortByPageNumber = document.querySelector('#sortByPageNumber');
const booksEelmentParent = document.querySelector('tbody');
const booksElements = document.querySelectorAll('tbody tr');

const itemsArr = [];
let toggleSort = true;
let toggleSort1 = true;





searchForm.addEventListener('keyup', (e) => {


    console.log(e.target.value);
})




sortByName.addEventListener('click', e => {

    booksElements.forEach(element => {
        itemsArr.push(element);
    })

    if (toggleSort) {
        itemsArr.sort(function (a, b) {
            return a.innerText == b.innerText
                ? 0
                : (a.innerText > b.innerText ? 1 : -1);
        });
    } else {
        itemsArr.sort(function (a, b) {
            return a.innerText == b.innerText
                ? 0
                : (a.innerText < b.innerText ? 1 : -1);
        });
    }


    booksElements.forEach(element => {
        element.remove()
    })

    itemsArr.forEach(element => {
        booksEelmentParent.appendChild(element)
    })

    toggleSort ? toggleSort = false : toggleSort = true;

    e.preventDefault()
})


sortByPageNumber.addEventListener('click', e => {

    booksElements.forEach(element => {
        itemsArr.push(element);
    })

    if (toggleSort1) {
        itemsArr.sort(function (a, b) {
            return a.children[1].innerText == b.children[1].innerText
                ? 0
                : (a.children[1].innerText > b.children[1].innerText ? 1 : -1);
        });
    } else {
        itemsArr.sort(function (a, b) {
            return a.children[1] == b.children[1]
                ? 0
                : (a.children[1].innerText < b.children[1].innerText ? 1 : -1);
        });
    }


    booksElements.forEach(element => {
        element.remove()
    })

    itemsArr.forEach(element => {
        booksEelmentParent.appendChild(element)
    })
    toggleSort1 ? toggleSort1 = false : toggleSort1 = true;

    e.preventDefault()
})