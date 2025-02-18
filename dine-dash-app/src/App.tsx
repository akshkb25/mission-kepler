import RestaurantPage from "./pages/RestaurantPage";
import HomePage from "./pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ReserveTablePage from "./pages/reserveTablePage/ReserveTablePage";
import Header from "./components/header/Header";
import MenuPage from "./pages/menuPage/MenuPage";

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />}/>
        <Route path="/reserve" element={<ReserveTablePage />} />
        <Route path="/restaurant/:restaurantId" element={<MenuPage />} /> 
      </Routes>
    </>
  );
};

export default App;
