import ReactMarkdown from 'react-markdown'

export default function RecipeResponse(props) {
    return (
        <section>
            <h2 className="section-title">Chef's Recommendation:</h2>

            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </article>
        </section>
    )
}
