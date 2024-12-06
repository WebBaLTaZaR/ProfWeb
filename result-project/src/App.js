import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./style/style.scss"

import MainPage from "./components/MainPage";
import PageCatalog from "./components/PageCatalog";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/pagecatalog" element={<PageCatalog />} />
        {/* <Route path="/basket" element={<BasketPage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
