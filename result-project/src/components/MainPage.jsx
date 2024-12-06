import Header from "./Header";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import MainMan from "./MainMan";
import Accesories from "./Accesories";
import Fetured from "./Fetured";
import Delivery from "./Delivery";
function MainPage() {
  return (
    <>
      <div className="conteiner">
        
          <Header />
          <MainMan />
          <MainMenu />
          <Accesories />
          <Fetured />
          <Delivery />
          <Footer/>
        
      </div>
    </>
  );
}

export default MainPage;
