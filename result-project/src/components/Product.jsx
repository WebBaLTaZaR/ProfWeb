import Catalog from "./Catalog";
import DescriptionProduct from "./DescriptionProduct";
import Footer from "./Footer";
import Header from "./Header";
import MainProduct from "./MainProduct";
import NewArrivals from "./NewArrivals";
function Product() {
  return (
    <>
      <div className="conteiner">
        <Header />
        <NewArrivals />
        <MainProduct />
        <DescriptionProduct />
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default Product;
