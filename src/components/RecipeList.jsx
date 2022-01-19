import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

//Components
import Recipe from "./Recipe";

const RecipeList = () => {
  //Recipes state
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.idDrink} />
      ))}
    </div>
  );
};

export default RecipeList;
