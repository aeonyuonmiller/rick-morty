import React, { useState, useEffect } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import Lottie from "react-lottie";

import Void from "./image/void";
import Card from "./components/Card/Card";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

const GlobalStyles = createGlobalStyle`
html {
  /* type system */
  --type: clamp(var(--min-size), var(---liquid-size), var(---max-size));
  --min-size: 20px;
  --liquid-size: 7vw + 1rem;
  --max-size: 160px;

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

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Void,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   // onMount & onUpdate
  //   return () => {
  //     // componentUnmount
  //   }
  // }, [])

  useEffect(() => {
    const getMyDataAsync = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        console.log(`data`, data);
        return data.results;
      } catch (err) {
        console.log(err);
      }
    };

    getMyDataAsync().then((charactersData) => {
      setCharacters(charactersData);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <GlobalStyles />
      <div className="App">
        {loading ? (
          <header className="App-header">
            <Lottie options={defaultOptions} width={200} />
          </header>
        ) : (
          <header className="App-header">
            {openModal && (
              <Modal
                onClose={() => {
                  setOpenModal(false);
                  console.log("closed");
                }}
                content={
                  <div>
                    <h1>{modalData.name}</h1>
                    <p>{modalData.species}</p>
                    <img src={modalData.image} alt={modalData.name} />
                  </div>
                }
              />
            )}

            <Layout>
              {characters.map(({ name, species, image, id }) => (
                <Card
                  onClick={(char) => {
                    setModalData(char);
                    setOpenModal(true);
                  }}
                  key={id}
                  name={name}
                  text={species}
                  image={image}
                />
              ))}
            </Layout>

            <Nav />
          </header>
        )}
      </div>
    </div>
  );
}

export default App;
