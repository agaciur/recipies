import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { Recipe } from "./components/Recipe/Recipe";
import { TopBar } from "./components/TopBar/TopBar"
import { RecipeContext } from "./context/RecipeContext";
import { IsLoggedInStateContext } from "./context/IsLoggedInStateContext";


function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    

    return (
        <IsLoggedInStateContext.Provider value={[isLoggedIn,setIsLoggedIn]}>
        <TopBar />
        <div className={styles.container}>
            <RecipeContext.Provider value={selectedRecipe}>
            <List
                recipes={recipes}
                onSelectRecipe={(id) => setSelectedRecipeId(id)}
            />
            <Cookbook
            />
        </RecipeContext.Provider>
        </div>
        <RecipeContext.Provider value={recipes[3]}>
        <div className={styles.promoted}>
            <h2>Przepis tygodani:</h2>
        <Recipe/>
        </div>
    </RecipeContext.Provider>
    </IsLoggedInStateContext.Provider>
    );
}

export default App;
