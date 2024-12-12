import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./style/style.scss"

import PageMain from "./components/pages/PageMain";
import PageCatalog from "./components/pages/PageCatalog";
import PageProduct from "./components/pages/PageProduct";
import PageShopping from "./components/pages/PageShopping";
import PageRegistration from "./components/pages/PageRegistration";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain/>} />
        <Route path="/catalog" element={<PageCatalog />} />
        <Route path="/curentproduct" element={<PageProduct />} />
        <Route path="/shopping" element={<PageShopping/>} />
        <Route path="/registration" element={<PageRegistration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
