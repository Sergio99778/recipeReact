import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Creating context
export const ModalContext = createContext();

//Creating provider
const ModalProvider = (props) => {
  //Provider state
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipe, setRecipe] = useState({});

  //Call to API with idRecipe
  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const infoRecipe = await axios.get(url);
      setRecipe(infoRecipe.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider value={{ setIdRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
