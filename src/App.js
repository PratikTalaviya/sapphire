import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "../../sapphire/src/components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
