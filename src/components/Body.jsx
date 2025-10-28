import React from "react"
import { getRecipeFromHuggingFace } from "../ai.js"
import IngredientsList from "./IngredientsList.jsx"
import RecipeResponse from "./RecipeResponse.jsx"
import AboutChefsKiss from "./AboutChefsKiss.jsx"

export default function Body() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeApi = await getRecipeFromHuggingFace(ingredients)
        setRecipe(recipeApi)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <div><AboutChefsKiss /></div>
            <form action={addIngredient} className="add-ingredient-form">
                <label htmlFor="ingredient">Ingredient</label>
                <input
                    type="text"
                    placeholder="e.g. cheese"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

             {recipe && <RecipeResponse 
                    recipe={recipe}
                />
            }
        </main>
    )
}