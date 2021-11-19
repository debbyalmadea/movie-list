export function AddMovieToWishlist(movie) {
    fetch('http://localhost:8000/wishlist', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    })
}

export function RemoveMovieFromWishlist(movie) {
    fetch('http://localhost:8000/wishlist/' + movie.id, {
        method: 'DELETE', 
    })
}