import React, { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hook/useCatImage";
import { useCatFact } from "./hook/useCatFact";
import Otro from "./components/Otro";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;



function App() {
  const { fact, getFactAndUpdateReactState } = useCatFact();
  //Llamo el Customhook que recupera la imagen
  const { imageUrl } = useCatImage({ fact });

  //Funcion para el boton para solicitar los datos nuevos
  const handleClick = async () => {
    getFactAndUpdateReactState();
  };

  return (
    <main>
      <h1>App de Gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat" />}
      </section>
      <button type="button" onClick={handleClick}>
        Nueva Cita
      </button>
    </main>
  );
}

export default App;
