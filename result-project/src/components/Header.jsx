import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import { useState } from "react";
import DisableScroll from "./DisableScroll";
function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const handleClickHidden = () => {
    setIsHidden(!isHidden);
    setIsScrollDisabled(!isScrollDisabled);
  };

  return (
    <>
      <header>
        <div className="headerWrapMenu">
          <nav className="header__conteiner limit__content">
            <div className="header__left">
              <Link to="/" className="logo">
                <img src="img/logo.png" alt="logo" />
              </Link>
              <Link to="/" className="search">
                <img src="img/search.svg" alt="search" />
              </Link>
            </div>
            <div className="header__right">
              <button onClick={handleClickHidden} className="burger">
                <img src="img/burger.svg" alt="burger" />
              </button>
              <Link to="/registration" className="profile">
                <img src="img/profile.svg" alt="profile" />
              </Link>
              <Link to="/" className="basket">
                <div>
                  <img src="img/basket.svg" alt="basket" />
                  <span className="basket__number">0</span>
                </div>
              </Link>
              <div className="basketMenu hidden">
                <ul className="basketConst">
                  <li>Название товара</li>
                  <li>Количество</li>
                  <li>Цена за шт.</li>
                  <li>Итого</li>
                </ul>
                <span>
                  Товаров в корзине на сумму: $
                  <span className="basketTotalPrice"></span>
                </span>
              </div>
            </div>
          </nav>
          <MainMenu isHidden={isHidden} handleClickHidden={handleClickHidden} />
        </div>
      </header>
      <DisableScroll isScrollDisabled={isScrollDisabled} />
    </>
  );
}

export default Header;
