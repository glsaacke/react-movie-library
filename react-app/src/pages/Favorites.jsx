import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorite = () => {
    const {favorites} = useMovieContext()

    if (favorites) {
        return( //FIXME favorites do not stick after refreshing the page
            <div className='Favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            </div>
        )
    }

    return ( 
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
     );
}
 
export default Favorite;