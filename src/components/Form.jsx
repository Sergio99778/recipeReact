import React, { useContext } from "react";
import "../bootstrap.min.css";

//State for Categories
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  //Handle Categories state
  const { categories } = useContext(CategoriesContext);

  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select name="category" id="" className="form-control">
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
