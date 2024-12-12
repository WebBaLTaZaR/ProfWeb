import Footer from "../Footer";
import Header from "../Header";
import Registration from "../Registration";
import TitlePage from "../TitlePage";

function PageRegistration() {
  return (
    <>
    <div className="conteiner">
      <Header />
      <TitlePage title={"REGISTRATION"} />
      <Registration />
      <Footer />
      </div>
    </>
  );
}

export default PageRegistration;
