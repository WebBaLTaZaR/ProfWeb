import { Link } from "react-router-dom";
function Header() {
	return ( <>
	<header>
          <nav className="header__conteiner limit__content">
            <div className="header__left">
              <Link to="/" className="logo" >
                <img src="img/logo.png" alt="logo" />
              </Link>
              <Link to="/" className="search" >
                <img src="img/search.svg" alt="search" />
              </Link>
            </div>
            <div className="header__right">
              <Link to="/" className="burger" >
                <img src="img/burger.svg" alt="burger" />
              </Link>
              <Link to="/" className="profile" >
                <img src="img/profile.svg" alt="profile" />
              </Link>
              <a to="/" className="basket" >
                <div>
                  <img src="img/basket.svg" alt="basket" />
                  <span className="basket__number">0</span>
                </div>
              </a>
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
        </header>
	</> );
}

export default Header;