export default function RecipeResponse({ recipe }) {
  return (
    <section>
      <h2 className="section-title">Chef's Recommendation:</h2>

      <article
        className="suggested-recipe-container"
        aria-live="polite"
        dangerouslySetInnerHTML={{ __html: recipe }}
      />
    </section>
  );
}
