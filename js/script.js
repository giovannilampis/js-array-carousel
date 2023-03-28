"use strict"

// get the .items classed element

let items = document.querySelector(".items");

// get the.prev classed element from html

const prev = document.querySelector(".prev");

// get the.next classed element from html

const next = document.querySelector(".next");

for ( let i = 1; i < 6; i++ ) {

    let item = document.createElement("div");

    item.innerHTML = `
        <img src="./images/0${i}.webp" alt="superheroes">
    `;

    items.append(item);

    item.classList.add('item');
}

document.querySelector(".item").classList.add(".active");

document.querySelector(".item").classList.add(".first");

const elementsItem = document.querySelectorAll(".item");

const lastItem = elementsItem[elementsItem.length - 1];

lastItem.classList.add("last");




// ADD EVENT LISTENER

next.addEventListener("click", function() {

    // get the first html element that contains an img element: the .active classed one

    let activeItem = document.querySelector(".item.active");

    // get the element placed immediately after the one with class .active

    let itemToActive = activeItem.nextElementSibling;

    // make a cycle out of the sliding process with "next"

    if ( activeItem.classList.contains("last") ) {
        itemToActive = document.querySelector(".item.first");
    }

    // remove class .active

    activeItem.classList.remove("active");

    // add .active class to the following img element

    itemToActive.classList.add("active");

})

prev.addEventListener("click", function() {

     // get the first html element that contains an img element: the .active classed one

     let activeItem = document.querySelector(".item.active");

     // get the element placed immediately before the one with class .active

    let itemToActive = activeItem.previousElementSibling;

    // make a cycle out of the sliding process with "prev"


    if ( activeItem.classList.contains("first") ) {
        itemToActive = document.querySelector(".item.last");
    }

    // remove class .active

    activeItem.classList.remove("active");

    // add .active class to the following img element

    itemToActive.classList.add("active");

})