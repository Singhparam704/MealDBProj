import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import RecipeSearchPage from "./components/RecipeSearchPage";
import RecipeListingPage from "./components/RecipeListingPage";
import RecipeDetailsPage from "./components/RecipeDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route path="/" element={<RecipeSearchPage />} />
        <Route path="/recipes" element={<RecipeListingPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
