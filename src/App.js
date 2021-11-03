import React, { useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

const GlobalStyles = createGlobalStyle`
html {
  /* brand foundation */
  --brand-hue: 188;
  --brand-saturation: 82%;
  --brand-lightness: 43%;

  /* light */
  --brand: hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness));
  --darkest: hsl(var(--brand-hue) var(--brand-saturation) 10%);
  --dark: hsl(var(--brand-hue) 30% 30%);
  --surface1: hsl(var(--brand-hue) 25% 90%);
  --surface2: hsl(var(--brand-hue) 20% 99%);
  --surface3: hsl(var(--brand-hue) 20% 92%);
  --surface4: hsl(var(--brand-hue) 20% 85%);
  --surface-shadow: hsl(var(--brand-hue) 10% 20%);
  --shadow-strength: 0.02;

  /* input */
  --input-border: #8b8a8b;
  --input-focus-h: 245;
  --input-focus-s: 100%;
  --input-focus-l: 42%;
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
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          {openModal && <Modal />}

          <Layout>
            <Card
              title="Character goes here"
              text="species"
              onClick={() => {
                setOpenModal(true);
              }}
            />
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
