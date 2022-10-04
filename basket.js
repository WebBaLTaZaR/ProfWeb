'use strict'


let addToCartBasket = document.querySelector('.add__to-cart-button');
let basket = document.querySelector('.basket');
let busketNumber = document.querySelector('.busket__number');
function adderProductionBasket(){
	busketNumber.textContent++; 
}
let busketMenu = document.querySelector('.busketMenu');
let busketConst = document.querySelector('.busketConst');
let busketWar = document.querySelector('.busketWar');
let busketProductName = document.querySelector('.busketProductName');
let busketID = document.querySelector('.busketID');
let busketPrice = document.querySelector('.busketPrice');
let busketAllPrice = document.querySelector('.busketAllPrice');
let busketTotalPrice = document.querySelector('.busketTotalPrice');







addToCartBasket.addEventListener('click', adderProductionBasket )