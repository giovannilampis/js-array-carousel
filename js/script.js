"use strict"

// get the.prev classed element from html

const prev = document.querySelector(".prev");

// get the.next classed element from html

const next = document.querySelector(".next");

// ADD EVENT LISTENER

next.addEventListener("click", function() {

    // get the first html element that contains an img element: the .active classed one

    let activeItem = document.querySelector(".item.active");

    // get the element placed immediately after the one with class .active

    let itemToActive = activeItem.nextElementSibling;

    // remove class .active

    activeItem.classList.remove("active");

})