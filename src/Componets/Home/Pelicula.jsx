import movies from "../movies.json";
import PeliculaCart from "./PeliculaCart";
import '../Home/Home.css'
export default function pelicula() {
return (
    <ul className="Box_Pelicula">
            {movies.map((movies)=>
            <PeliculaCart key={movies.id} movies={movies}/> 
            )}
    </ul>
)
}
