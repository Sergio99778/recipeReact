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
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
//End Material UI modal

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
  const { setIdRecipe } = useContext(ModalContext);

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
              setIdRecipe(null);
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h1>From modal</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
