async function searchMealsByIngredient(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
    ingredient
  )}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.meals || [];
}

async function getMealDetails(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.meals ? data.meals[0] : null;
}

export async function getRecipeFromAPI(ingredientsArr) {
  for (const ingredient of ingredientsArr) {
    const meals = await searchMealsByIngredient(ingredient);

    if (meals.length > 0) {
      const meal = await getMealDetails(meals[0].idMeal);

      return `
      <h2>${meal.strMeal}</h2>

      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>

      <h3>🥣 Instructions</h3>
      <p>${meal.strInstructions}</p>

      <h3>🖼️ Image</h3>
      <img src="${meal.strMealThumb}" alt="${
        meal.strMeal
      }" style="max-width: 100%; border-radius: 8px; margin: 10px 0;" />

      <h3>🍽️ Ingredients</h3>
      <ul>
        ${collectIngredientsAsHTML(meal)}
      </ul>
    `;
    }
  }

  return `No recipes found using any of: ${ingredientsArr.join(", ")}`;
}

function collectIngredientsAsHTML(meal) {
  let list = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (!ingredient) break;
    list += `<li>${ingredient} — ${measure}</li>`;
  }
  return list;
}
