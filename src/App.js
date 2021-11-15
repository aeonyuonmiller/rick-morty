import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  * { margin: 0; }

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
  const [selectedChar, setSelectedChar] = useState({});

  const [characters, setCharacters] = useState([]);
  const [displayedCharacter, setDisplayedCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Void,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // first API-call
  useEffect(() => {
    const getMyDataAsync = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        console.log(`data`, data);
        const characters = data.results.map((char) => {
          return {
            name: char.name,
            image: char.image,
            species: char.species,
            searchName: char.name.toLowerCase(),
            id: char.id,
          };
        });
        return characters;
      } catch (err) {
        console.log(err);
      }
    };

    getMyDataAsync().then((charactersData) => {
      setCharacters(charactersData);
      setDisplayedCharacter(charactersData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  // filtered characters
  useEffect(() => {
    const filteredCharacter = characters.filter((char) =>
      char.searchName.includes(searchInput)
    );
    setDisplayedCharacter(filteredCharacter);
  }, [searchInput]);

  return (
    <AnimatePresence>
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
                  }}
                  char={selectedChar}
                />
              )}

              <Layout>
                {displayedCharacter.map(({ name, species, image, id }) => (
                  <Card
                    key={id}
                    onClick={() => {
                      setSelectedChar({ name, species, image, id });
                      setOpenModal(true);
                    }}
                    name={name}
                    text={species}
                    image={image}
                  />
                ))}
              </Layout>

              <Nav
                onFilter={(searchValue) =>
                  setSearchInput(searchValue.toLowerCase())
                }
              />
            </header>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
