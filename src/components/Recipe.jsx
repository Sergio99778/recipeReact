import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-block">
            Show recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
