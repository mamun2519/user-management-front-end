import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./components/home/Home";
// src/main.ts

// your other code...

function App() {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" component={About} />
          <Route component={NotFound} /> */}
        </Routes>
      </Router>
    </MainLayout>
  );
}

export default App;
