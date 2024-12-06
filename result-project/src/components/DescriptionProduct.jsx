function DescriptionProduct() {
  return (
    <>
      <div className="womanCollection womanCollection-back">
        <section className="womanCollectionContent limit__content">
          <div className="womanCollectionItem">WOMEN COLLECTION</div>
          <hr className="womanCollectionItem-hr" />
          <h3>MOSCHINO CHEAP AND CHIC</h3>
          <p>
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <div className="womanCollectionPrice">$561</div>
          <hr className="womanCollectionPrice-hr" />
          <div className="womanCollectionFilter">
            <span className="womanCollectionFilterItem">CHOOSE COLOR</span>
            <span className="filterVectorImg"></span>
            <span className="womanCollectionFilterItem">CHOOSE SIZE </span>
            <span className="filterVectorImg"></span>
            <span className="womanCollectionFilterItem">QUANTITY</span>
            <span className="filterVectorImg"></span>
          </div>
          <button className="add__to-cart-button filterButton">
            <img
              className="add__to-cart-basket"
              src="img/redbasket.svg"
              alt="basket"
            />
            Add to Cart
          </button>
        </section>
      </div>
    </>
  );
}

export default DescriptionProduct;
