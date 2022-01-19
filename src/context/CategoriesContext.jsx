import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Create context
export const CategoriesContext = createContext();

//Create provider
const CategoriesProvider = (props) => {
  //Create state of Context
  const [categories, setCategories] = useState([]);

  //Call to API
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categoriesData = await axios.get(url);
      setCategories(categoriesData.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
