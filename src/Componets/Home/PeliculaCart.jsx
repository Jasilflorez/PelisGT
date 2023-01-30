
export default function PeliculaCart({ movies }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
    return (
        <li className="Box_Pelicula">
            <article className="CartPeli">
                <img src={imageUrl} alt="" />
                <h3>
                {movies.title}
                </h3>
            </article>
                
        </li>
    )
}
