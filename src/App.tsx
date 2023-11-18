import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Reg from "./components/auth/Reg";
// src/main.ts

// your other code...

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
