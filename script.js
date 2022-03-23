'use strict';
let burger = document.querySelector('.burger');
let mainDark = document.querySelector('.main__dark');
let closeItem = document.querySelector('.close__item');


function toggleMenu() {
	mainDark.classList.toggle('hidden');
}


burger.addEventListener('click', toggleMenu);
closeItem.addEventListener('click', toggleMenu);

