import React, { useContext, useState } from "react";
import "../bootstrap.min.css";

//State for Categories
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  //Handle Categories state
  const { categories } = useContext(CategoriesContext);

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
