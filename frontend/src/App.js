import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import MainPage from "./pages/MainPage";
import CardDetail from "./pages/CardDetail"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <div className=" flex">
      <Menu />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="CardDetail/:id" element={<CardDetail/>} />
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
