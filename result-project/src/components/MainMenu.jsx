import { Link } from "react-router-dom";
function MainMenu({ isHidden, handleClickHidden }) {
  return (
    <>
      <main>
        <div className={`main__dark ${isHidden ? "hidden" : ""}`}>
          <div className="nav__menu">
            <img onClick={()=>handleClickHidden("element1")} className="close__item" src="img/Close.png" alt="Close" />
            <div className="menu">MENU</div>
            <Link to="/" className="menu__ul">
              MAN
            </Link>
            <ul className="menu__li">
              <li>Accessories</li>
              <li>Bags</li>
              <li>Denim</li>
              <li>T-Shirts</li>
            </ul>
            <Link to="/" className="menu__ul">
              WOMAN
            </Link>
            <ul className="menu__li">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>
            <div className="menu__ul">KIDS</div>
            <ul className="menu__li">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>Bags</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainMenu;
