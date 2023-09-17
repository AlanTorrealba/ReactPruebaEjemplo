import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact(){
    const [fact, setFact] = useState();
    // Hago llamada de la funcion que consulta la API para traerme los datos
    const getFactAndUpdateReactState = () => {
      getRandomFact().then(setFact);
    };
    useEffect(getFactAndUpdateReactState, []);
  
    return { fact, getFactAndUpdateReactState };
  };