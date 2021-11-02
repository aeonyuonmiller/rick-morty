import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

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
    <div className="App">
      <header className="App-header">
        <Nav />

        <Modal />

        <Layout>
          <Card title="Title goes here" text="paragraph goes here" />
          <Card title="Title goes here" text="paragraph goes here" />
          <Card title="Title goes here" text="paragraph goes here" />
        </Layout>
      </header>
    </div>
  );
}

export default App;
