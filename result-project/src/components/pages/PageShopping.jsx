import CardDecoration from "../CardDecoration";
import Footer from "../Footer";
import Header from "../Header";
import TitlePage from "../TitlePage";

function PageShopping() {
  return (
    <>
      <div className="conteiner">
        <Header />
        <TitlePage title={"SHOPPING CART"} />
        <CardDecoration />
        <Footer />
      </div>
    </>
  );
}

export default PageShopping;
