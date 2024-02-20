import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import MainPage from "./pages/MainPage";
import CardDetail from "./pages/Img/CardDetail"
import { Route, Routes } from "react-router-dom";

import CardList from "./components/Video/VidCardList";
import VidDetail from "./pages/Vid/VidDetail";
import Login from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import {  useState } from "react";
const App =() =>{

  const [user,setLoginUser] = useState({
  })

  console.log(user)

  return (
    <div>
      <NavBar/>
      <div className=" flex ">
      <Menu />
      <Routes>
        
        <Route path="/" element={<MainPage/>} />
        <Route exact path="/Photo/:id" element={<CardDetail/>} />
        <Route  path="/videos/video/:id" element={<VidDetail/>} />
        <Route path="/videos" element={<CardList/>} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
