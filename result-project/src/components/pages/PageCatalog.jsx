import Header from "../Header";
import Footer from "../Footer";
import Delivery from "../Delivery";
import Catalog from "../Catalog";
import Pagination from "../Pagination";
import NewArrivals from "../NewArrivals";
import Filter from "../Filter";
function PageCatalog() {
  return (
    <>
      <div classNameName="conteiner">
        <Header />
        <NewArrivals />
        <Filter />
        <Catalog />
        <Pagination />
        <Delivery />
        <Footer />
      </div>
    </>
  );
}

export default PageCatalog;
