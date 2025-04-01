import "./App.css";
import ButtonComponent from "./ButtonComponents";
import ImageComponent from "./ImageComponents";

function App() {
  return (
    <>
      <div>
        <ImageComponent
          src="https://upload.wikimedia.org/wikipedia/it/9/96/Prova_prova_sa_sa.png"
          alt="Logo"
        />
        <ImageComponent
          src="https://www.blogsicilia.it/wp-content/uploads/sites/2/2022/10/unnamed11.jpg"
          alt="applausi"
        />
        <ImageComponent
          src="https://www.avmagazine.it/immagini/2023_10_26_Prova_prova_sa_sa_2_01.jpg"
          alt="The best!"
        />
      </div>
      <div>
        <h1>Prova Prova SA SA</h1>

        <ButtonComponent text="PROVA!" />
        <ButtonComponent text="PROVA1!" />
        <ButtonComponent text="PROVA2!" />
      </div>
    </>
  );
}

export default App;
