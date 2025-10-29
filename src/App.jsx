import {} from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Saree from "./pages/Saree";
import SareeDetails from "./pages/SareeDetails";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="saree" element={<Saree />} />

          <Route path="saree/:id" element={<SareeDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
