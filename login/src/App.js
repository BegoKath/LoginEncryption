import { BrowserRouter,Route, Routes } from "react-router-dom";

import { Home } from "./screen/home";
import {Login} from "./screen/login";
export  const App = () => {
  return (    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
       </Routes>
      </BrowserRouter>
  
  );
};