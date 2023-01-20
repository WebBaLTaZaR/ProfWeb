'use strict'


const basketEl = document.querySelector('.basket'); // Элемент "Корзина"
const basketNumberEl = document.querySelector('.basket__number');
const basketMenuEl = document.querySelector('.basketMenu');
const basketConstEl = document.querySelector('.basketConst');
const pathToImages = 'img';
const fetureСardEl = document.querySelector('.feture__card');
const basketTotalPriceEl = document.querySelector('.basketTotalPrice'); // окончательная сумма $
/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это количество товаров в корзине, например:
 {
    1: 10,
    3: 2
 }
 */
 let basket = {

};

/**
 * функция обновляет счётчик на корзине после клика по выбранным продуктам
 */
function adderProductionBasket(){
	basketNumberEl.textContent++; 
}

/**
 * Эта функция принимает один из объектов из массива products в файле basketProducts.js и создаёт разметку карточки товара.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `
		<div class="card">
            <div class="fetured__img-wrap">
              <img
                class="card__img"
                src="${pathToImages}/${product.image}"
                alt="${product.name}"
              />
              <div class="fetured__img-dark">
                  <button class="add__to-cart-button" data-productId="${product.id}">
                    <img
                      class="add__to-cart-basket"
                      src="${pathToImages}/basket.svg"
                      alt="basket"
                    />
                    Add to Cart
                  </button>
              </div>
            </div>

            <h6 class="card__main">${product.name}</h6>
            <p class="card__text">${product.description}</p>
            <p class="card__price">$${product.price}</p>
          </div>
    `;
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла basketProducts.js
 * @param {fetureСardEl} fetureСardEl элемент с классом .feture__card
 */
function insertProductsIntoPage(products, fetureСardEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    fetureСardEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Метод добавляет продукт в объект basket 
 * @param {number} productId 
 */
function adderProductToObject(productId){
	if (!(productId in basket)){
		basket[productId] = 1;
	} else {
		basket[productId]++;
	}
}

	basketEl.addEventListener('click', function() {
		basketMenuEl.classList.toggle('hidden');
});

/**
 * функция запрашивает аттрибут продукта 
 * @param {number} клик number
 */
function adderProductHandler(event){
	const productId = event.currentTarget.getAttribute('data-productId');
	addProductionToBasket(productId);
}

/**
 * Функция отрисовывает новый продукт в корзине.
 * @param {number} productId
 */
function renderNewProductInBasket(productId) {
	let basketWar = `
	<div class="basketWar">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
  `;
	basketConstEl.insertAdjacentHTML('afterend', basketWar)
}

/**
 * Функция, которая ждет клик по кнопке отправки товара в корзину.
 */
function listenerForAddToCardBtn() {
	const products = document.querySelectorAll('button[data-productId]');
	products.forEach(button => {
		button.addEventListener('click', adderProductHandler );
});
}

/**
 * Функция, высчитывает окончательную сумму.
 */
function calculateTotalSum() {
  let totalSum = 0;
  for (let productId in basket) {
      totalSum += basket[productId] * products[productId].price;
  }
  basketTotalPriceEl.textContent = totalSum.toFixed(2);
}

/**
 * Функция увеличивает количество товара на 1.
 * @param {number} productId
 */
function increaseProductCount(productId) {
  const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
  productCountEl.textContent++;
}

/**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInBasket(productId) {
  let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
  if (productExist) {
      increaseProductCount(productId);
      recalculateSumForProduct(productId);
  } else {
      renderNewProductInBasket(productId);
  }
}

/**
 * Функция пересчитывает стоимость товара умноженное на количество товара
 * в корзине.
 * @param {number} productId
 */
function recalculateSumForProduct(productId) {
  const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
  let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
  productTotalRowEl.textContent = totalPriceForRow;
}

insertProductsIntoPage(products, fetureСardEl);
listenerForAddToCardBtn()

/**
 * Функция добавляет товар в корзину.
 * @param {number} productId
 */
function addProductionToBasket(productId) {
	adderProductionBasket();
	adderProductToObject(productId);
	renderProductInBasket(productId);
	calculateTotalSum();
	
};




