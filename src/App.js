import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>

      <main>
        <Hero />
        <About/>
        <Services/>
        <Work/>
        <Team/>
        <Testimonials/>
        <Pricing/>
        <Blog/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>

      <footer id="footer"></footer>
    </div>
  );
}

export default App;
