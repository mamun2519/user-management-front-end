import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Reg from "./components/auth/Reg";
import { ToastContainer } from "react-toastify";
import MyTeam from "./components/home/MyTeam";
import RequireAuth from "./components/auth/RequreAuth";
import UserDetails from "./components/home/UserDetails";
// src/main.ts

// your other code...

function App() {
  return (
    <MainLayout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route
          path="/my-team"
          element={
            <RequireAuth>
              <MyTeam />
            </RequireAuth>
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
