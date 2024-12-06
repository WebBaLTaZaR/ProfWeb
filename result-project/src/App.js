import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./style/style.scss"

import MainPage from "./components/MainPage";
import PageCatalog from "./components/PageCatalog";
import Product from "./components/Product";
import PageShopping from "./components/PageShopping";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MainPage/>} />
        <Route path="/catalog" element={<PageCatalog />} />
        <Route path="/curentproduct" element={<Product />} />
        <Route path="/shopping" element={<PageShopping/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
