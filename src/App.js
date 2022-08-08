import React, { useState } from 'react';
import './style.css';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from './Habits';
import Hoje from './Hoje';
import Historico from './Historico';
import Login from './Login';
import SignUp from './Signup';
import UserContext from './contexts/UserContext';

export default function App() {
  const [login, setLogin] = useState("");

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/cadastro' element={<SignUp />} />
          <Route path='/habitos' element={<Habits />} />
          <Route path='/hoje' element={<Hoje />} />
          <Route path='/historico' element={<Historico />} />
        </Routes>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

