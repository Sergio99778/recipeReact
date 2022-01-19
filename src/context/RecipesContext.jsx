import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

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
  const [consult, setConsult] = useState(false);

  //Call to API to get recipes
  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${quest.name}&c=${quest.category}`;

        const recipes = await axios.get(url);
        setRecipes(recipes.data.drinks);
        setConsult(false);
      };
      getRecipes();
    }
  }, [quest]);

  return (
    <RecipesContext.Provider value={{ setQuest, setConsult }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
