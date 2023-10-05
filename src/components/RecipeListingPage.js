import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./RecipeListingPage.css";

function RecipeListingPage() {
  const location = useLocation();
  const recipes = location.state?.recipes || [];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Recipes List</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.strMeal}</h5>
                <p className="card-text">Category: {recipe.strCategory}</p>
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="btn btn-primary"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeListingPage;
