import React, { createContext, useState } from "react";

//Creating context
export const RecipesContext = createContext();

//Create reducer
const RecipesProvider = (props) => {
  //State
  const [recipes, setRecipes] = useState([]);
  const [quest, setQuest] = useState({
    name: "",
    category: "",
  });
  return (
    <RecipesContext.Provider value={{ setQuest }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
