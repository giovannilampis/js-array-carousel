"use strict"

const prev = document.querySelector(".prev");

const next = document.querySelector(".next");

next.addEventListener("click", function() {

    // selezionare il primo elemento html contenente un'immagine, ovvero quello con classe active

    let activeItem = document.querySelector(".item.active");

    let itemToActive = activeItem.nextElementSibling;
})