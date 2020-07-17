import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Body />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
