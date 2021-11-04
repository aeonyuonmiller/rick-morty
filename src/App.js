import React, { useState, useEffect } from "react";
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

// const secondFetch = async () => {
//   const resSecond = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const dataSecond = await resSecond.json();
//   return dataSecond;
// };

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // if (data) {
        //   const dataSecond = await secondFetch();
        //   console.log(`dataSecond`, dataSecond);
        // }
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
          <h1>Loading</h1>
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
                  </div>
                }
              />
            )}

            <Layout>
              {characters.map((character) => (
                <Card
                  onClick={(char) => {
                    setModalData(char);
                    setOpenModal(true);
                  }}
                  key={character.id}
                  name={character.name}
                  text={character.species}
                  image={character.image}
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
