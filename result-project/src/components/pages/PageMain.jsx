import Header from "../Header";
import Footer from "../Footer";
import MainMan from "../MainMan";
import Accesories from "../Accesories";
import Fetured from "../Fetured";
import Delivery from "../Delivery";
function PageMain() {
  return (
    <>
      <div className="conteiner">
        <Header />
        <MainMan />
        <Accesories />
        <Fetured />
        <Delivery />
        <Footer />
      </div>
    </>
  );
}

export default PageMain;
