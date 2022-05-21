import React from "react";

import Banner from './components/Banner';
import Contact from "./components/contact/Contact";
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Posts from "./components/Posts";
import Reviews from './components/Reviews';
import SemiNav from './components/SemiNav';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
     <Navbar />
     <SemiNav />
     <Banner />
     <Experience />
     <Contact />
     <Reviews />
     <Showcase />
     <Posts />
     <Footer />

    </div>
  );
}

export default App;
