import React, { useContext, useState } from "react";

//Context
import { ModalContext } from "../context/ModalContext";

//Material UI modal
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//End Material UI modal

const imageStyle = {
  width: "15vw",
  heigth: "15vh",
  display: "block",
  margin: "0 auto",
};

const Recipe = ({ recipe }) => {
  //config Material UI modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //State from context
  const { recipeInfo, setIdRecipe, setRecipe } = useContext(ModalContext);

  //Ingredients
  const showIngredients = (information) => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (information[`strIngredient${i}`]) {
        ingredients.push(
          <li key={information.idDrink + Math.random()}>
            {" "}
            {information[`strIngredient${i}`]} {information[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              setIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            Show recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setRecipe({});
              setIdRecipe(null);
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeInfo.strDrink}</h2>
              <h3 className="mt-4">Instructions:</h3>
              <p>{recipeInfo.strInstructions}</p>
              <img
                src={recipeInfo.strDrinkThumb}
                alt={recipeInfo.strDrink}
                className="img-fluid mt-4"
                style={imageStyle}
              />
              <h3>Ingredients and quantities</h3>
              <ul>{showIngredients(recipeInfo)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
