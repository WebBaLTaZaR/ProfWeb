'use strict';
let filterItem = document.querySelector('.filterItem');
let filterItemRed = document.querySelector('.filterItem-red');
let filterCategory = document.querySelector('.filterCategory');

let buttonSize = document.querySelector('.buttonSize');
let filterTrendingSize = document.querySelector('.filterTrending-size');


function toggleFilter() {
	filterCategory.classList.toggle('hidden');
}
function toggleSize() {
	filterTrendingSize.classList.toggle('hidden');
}



filterItem.addEventListener('click', toggleFilter);
filterItemRed.addEventListener('click', toggleFilter);

buttonSize.addEventListener('click', toggleSize);
