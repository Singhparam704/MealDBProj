import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api";
import "./RecipeDetailsPage.css";

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const data = await getRecipeDetails(recipeId);
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{recipe.strMeal}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid"
          />
          {recipe.strYoutube && (
            <div className="mt-4">
              <h2>Video</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${
                    recipe.strYoutube.split("=")[1]
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.strInstructions}
          </p>
          <h2>Ingredients</h2>
          <ul className="list-group">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = recipe[`strIngredient${index}`];
              const measure = recipe[`strMeasure${index}`];
              if (ingredient) {
                return (
                  <li key={index} className="list-group-item">
                    {ingredient} - {measure}
                  </li>
                );
              }
              return null; // Don't render empty slots
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
