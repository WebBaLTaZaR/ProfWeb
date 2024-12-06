function Filter() {
  return (
    <>
      <div className="filter limit__content">
        <div className="filterItems">
          <span className="filterItem">FILTER</span>
          <span className="filterImg"></span>
          <div className="filterCategory hidden">
            <div className="filterWrap">
              <span className="filterItem filterItem-red">FILTER</span>
              <span className="filterImg filterImg-red"></span>
              <div className="filterCategoryItem">CATEGORY</div>
              <ul className="filterList">
                <li>Accessories</li>
                <li>Bags</li>
                <li>Denim</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets & Coats</li>
                <li>Polos</li>
                <li>Shirts</li>
                <li>Shoes</li>
                <li>Sweaters & Knits</li>
                <li>T-Shirts</li>
                <li>Tanks</li>
              </ul>
              <div className="filterCategoryItem">CATEGORY</div>
              <div className="filterCategoryItem">CATEGORY</div>
            </div>
          </div>
        </div>
        <div className="filterTrending">
          <span className="filterTrendingItem">TRENDING NOW</span>
          <span className="filterVectorImg"></span>
          <span className="filterTrendingItem buttonSize">SIZE </span>
          <span className="filterVectorImg"></span>
          <span className="filterTrendingItem">PRICE</span>
          <span className="filterVectorImg"></span>
          <div className="filterTrending-size hidden">
            <div>
              <input type="checkbox" />
              XS
            </div>
            <div>
              <input type="checkbox" />S
            </div>
            <div>
              <input type="checkbox" />M
            </div>
            <div>
              <input type="checkbox" />L
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
