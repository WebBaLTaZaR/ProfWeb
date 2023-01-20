'use strict'
class ProductDTO{
	/**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} image название файла с картинкой, например 0.jpg
     * @param {string} name имя товара
     * @param {string} description описание товара
     * @param {number} price цена товара
     */
	constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const products = [
    new ProductDTO(
        0,
        'card0.png',
        'Product 0',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        52.22,
    ),
    new ProductDTO(
        1,
        'card1.png',
        'Product 1',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        32.12,
    ),
    new ProductDTO(
        2,
        'card2.png',
        'Product 2',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        82.87,
    ),
    new ProductDTO(
        3,
        'card3.png',
        'Product 3',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        22.39,
    ),
    new ProductDTO(
        4,
        'card4.png',
        'Product 4',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
        92.99,
    ),
    new ProductDTO(
        5,
        'card5.png',
        'Product 5',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        12.55,
    ),
    new ProductDTO(
        6,
        'NewCard6.png',
        'Product 6',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        14.25,
    ),  
    new ProductDTO(
        7,
        'NewCard7.png',
        'Product 7',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique purus ac orci faucibus, id maximus leo molestie. Praesent in ante ac magna accumsan elementum eget ut leo.',
        110.01,
    ),
    new ProductDTO(
        8,
        'NewCard8.png',
        'Product 8',
        'Proin eu arcu lectus. Maecenas eget orci a massa sodales ullamcorper. Fusce a felis diam. Integer nec tellus metus.',
        59.99,
    ),
    new ProductDTO(
        9,
        'NewCard9.png',
        'Product 9',
        'Sed ex erat, bibendum vitae pulvinar et, aliquet in sapien. Suspendisse quis consectetur sapien.',
        129.99,
    ),    
]


