import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

const GlobalStyles = createGlobalStyle`
html {
  /* brand foundation */
  --brand: hsl(200, 100%, 50%);
  --brand-hue: 200;
  --brand-saturation: 100%;
  --brand-lightness: 50%;

  /* light */
  --brand-light: hsl(var(--brand-hue) var(--brand-saturation) var(var(--brand-lightness)));
  --text1-light: hsl(var(--brand-hue) var(var(--brand-saturation)) 10%);
  --text2-light: hsl(var(--brand-hue) 30% 30%);
  --surface1-light: hsl(var(--brand-hue) 25% 90%);
  --surface2-light: hsl(var(--brand-hue) 20% 99%);
  --surface3-light: hsl(var(--brand-hue) 20% 92%);
  --surface4-light: hsl(var(--brand-hue) 20% 85%);
  --surface-shadow-light: hsl(var(--brand-hue) 10% 20%);
  --shadow-strength-light: 0.02;
}`;

const getMyDataAsync = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api");
    console.log(res);
    const data = await res.json();
    console.log(data);
    // if (data) {
    //   const resSecond =
    // };
  } catch (err) {
    console.log(err);
  }
};

getMyDataAsync();

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <Modal />

          <Layout>
            <Card title="Character goes here" text="species" />
            <Card title="Character goes here" text="species" />
            <Card title="Character goes here" text="species" />
          </Layout>

          <Nav />
        </header>
      </div>
    </div>
  );
}

export default App;
