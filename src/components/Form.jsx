import React from "react";
import "../bootstrap.min.css";

const Form = () => {
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
            <option value="other">other</option>
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
