function Delivery() {
  return (
    <>
      <div className="delivery">
        <div className="delivery-limit limit__content">
          <div className="delivery__icon">
            <img className="delivery__img" src="img/track.svg" alt="track" />
            <h4 className="description">Free Delivery</h4>
            <p className="description__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="delivery__icon">
            <img
              className="delivery__img"
              src="img/discount.svg"
              alt="discount"
            />
            <h4 className="description">Sales & discounts</h4>
            <p className="description__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div className="delivery__icon">
            <img className="delivery__img" src="img/crown.svg" alt="crown" />
            <h4 className="description">Quality assurance</h4>
            <p className="description__text">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
