import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { searchRecipesByIngredient } from "../api";
import "./RecipeSearchPage.css";

function RecipeSearchPage() {
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSearch = async () => {
    if (ingredient) {
      const recipes = await searchRecipesByIngredient(ingredient);
      navigate(`/recipes?ingredient=${ingredient}`, { state: { recipes } }); // Use navigate
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="recipe-search-page container mt-5">
      <h1 className="mb-4">Search Your Favorite Recipes</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Ingredient.."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default RecipeSearchPage;
