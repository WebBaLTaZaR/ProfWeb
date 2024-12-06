import Footer from "./Footer";
import Header from "./Header";

function PageShopping() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="mangoPeople-wrap limit__content">
          <div className="mangoPeople-left">
            <div className="mangoPeopleCart">
              <div className="mangoImg">
                <img src="img/card3.png" alt="" />
              </div>
              <div className="mangoDiscription">
                <div className="mangoDiscriptionTitle">
                  MANGO PEOPLE T-SHIRT
                  <span className="mangoDiscriptionClosed"></span>
                </div>
                <div className="mangoDiscriptionItems">
                  <div>
                    Price:{" "}
                    <span className="mangoDiscriptionItems-red">$300</span>
                  </div>
                  <div>Color: Red</div>
                  <div>Size: Xl</div>
                  <div>
                    Quantity:
                    <span className="mangoDiscriptionItems-border">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mangoPeopleCart mangoPeopleCart-margin">
              <div className="mangoImg">
                <img src="img/NewCard2.png" alt="" />
              </div>
              <div className="mangoDiscription">
                <div className="mangoDiscriptionTitle">
                  MANGO PEOPLE T-SHIRT
                  <span className="mangoDiscriptionClosed"></span>
                </div>
                <div className="mangoDiscriptionItems">
                  <div>
                    Price:{" "}
                    <span className="mangoDiscriptionItems-red">$300</span>
                  </div>
                  <div>Color: Red</div>
                  <div>Size: Xl</div>
                  <div>
                    Quantity:
                    <span className="mangoDiscriptionItems-border">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shoppingButton">
              <button className="shoppingButtonItem shoppingButton-left">
                Clear shopping cart
              </button>
              <button className="shoppingButtonItem">Continue shopping</button>
            </div>
          </div>
          <div className="mangoPeople-right">
            <form className="shoppingAdres">
              <div>SHIPPING ADRESS</div>
              <input
                className="shoppingInput"
                type="text"
                placeholder="Bangladesh"
              />
              <input
                className="shoppingInput"
                type="text"
                placeholder="State"
              />
              <input
                className="shoppingInput"
                type="text"
                placeholder="Postcode / Zip"
              />
              <button className="shoppingGetButton">GET A QUOTE</button>
            </form>
            <div className="totalPrice">
              <div className="subTotalPrice">
                SUB TOTAL<span>$900</span>
              </div>
              <div className="grandTotalPrice">
                GRAND TOTAL<span>$900</span>
              </div>
              <hr className="totalPrice-hr" />
              <button className="totalPriceButton">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageShopping;
