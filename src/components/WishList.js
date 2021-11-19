import { useState, useEffect } from "react";
import { MovieFormat} from "./MovieFormat";

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/wishlist')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setWishlist(data);
          });
        }, [])

    return (
        <div>
            <div className="movie-list">
                {wishlist.length > 0 && (
                wishlist.map((movie) => (
                <div className="movie" key={movie.id}>
                    <MovieFormat movie={movie} />
                </div>
                ))   
            )}
                {wishlist.length === 0 && (
                    <h1 className="no-result">No wish list yet.</h1>
                )}
            </div>
        </div>
    )
}

export default WishList;
