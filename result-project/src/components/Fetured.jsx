import products from "./DataCards";
function Fetured() {
  return (
    <>
      <div className="fetured limit__content">
        <h2 className="fetured__item">Fetured Items</h2>
        <p className="fetured__text">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <div className="feture__card limit__content">
        {products.map((product) => (
          <div class="card">
            <div class="fetured__img-wrap">
              <img
                class="card__img"
                src= {product.url}
                alt={product.name}
              />
              <div class="fetured__img-dark">
                <button
                  class="add__to-cart-button"
                  data-productId={product.id}
                >
                  <img
                    class="add__to-cart-basket"
                    src="img/basket.svg"
                    alt="basket"
                  />
                  Add to Cart
                </button>
              </div>
            </div>
            <h6 class="card__main">{product.name}</h6>
            <p class="card__text">{product.description}</p>
            <p class="card__price">${product.price}</p>
          </div>
        ))}
      </div>
      <button className="browse__button">Browse All Product</button>
    </>
  );
}

export default Fetured;
