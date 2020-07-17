import React from "react";
import { Header } from "./components/Header";
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
    </div>
  );
}

export default App;
