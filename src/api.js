import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/search.php?s=${ingredient}`
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error searching recipes by ingredient:", error);
    throw error;
  }
};

export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/lookup.php?i=${recipeId}`
    );
    return response.data.meals[0];
  } catch (error) {
    console.error("Error getting recipe details:", error);
    throw error;
  }
};
