import "./App.css";
import ButtonComponent from "./ButtonComponents";
import ImageComponent from "./ImageComponents";

function App() {
  return (
    <>
      <ImageComponent
        src="https://upload.wikimedia.org/wikipedia/it/9/96/Prova_prova_sa_sa.png"
        alt="Logo"
      />

      <h1>Prova Prova SA SA</h1>

      <ButtonComponent text="PROVA!" />
    </>
  );
}

export default App;
