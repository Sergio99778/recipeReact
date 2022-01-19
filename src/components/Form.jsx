import React, { useContext, useState } from "react";
import "../bootstrap.min.css";

//States
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  //Handle state
  const { categories } = useContext(CategoriesContext);
  const { setQuest } = useContext(RecipesContext);

  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setQuest(search);
      }}
    >
      <fieldset className="text-center">
        <legend>Search by ingredient or category</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Search by ingredient"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            id=""
            className="form-control"
            onChange={handleChange}
          >
            <option value="">-- Select Category</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {" "}
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-primary btn-block">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
