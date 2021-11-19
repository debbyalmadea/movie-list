import { AddMovieToWishlist } from "./MovieControl";
import { RemoveMovieFromWishlist } from "./MovieControl";
import { useState, useEffect } from "react";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieFormat = (props) => {
    const [wishstyle, setWishstyle] = useState({display: "block"})
    const [addstyle, setAddstyle] = useState({display: "block"})
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/wishlist')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setWishlist(data);
          });
        }, [])
    
    
    const handleClickAdd= () => {
        AddMovieToWishlist(props.movie)
        setAddstyle({display: "none"})
        setWishstyle({display: "block"})
    }

    const handleClickRemove= () => {
        RemoveMovieFromWishlist(props.movie)
        setWishstyle({display: "none"})
        setAddstyle({display: "block"})
    }

    return (
        <div className="movie-container">
                <div className="poster-container">
                    {props.movie.poster_path ? (
                        <img 
                        src={`${IMG_URL+props.movie.poster_path}`}
                        alt={`${props.movie.title} poster`}
                        onClick={props.open}
                        />
                    ) : (
                        <div className="filler-poster" onClick={props.open}></div>
                    )}

                    {wishlist.find((obj) => obj.id === props.movie.id) ? (
                        <>
                        <button className="add-movie" onClick={handleClickAdd} style={addstyle}>+ Add</button>
                        <button className="wish-list" onClick={handleClickRemove} style={wishstyle}>
                            <span className="added">Wish List</span>
                            <span className="remove">Remove</span>
                        </button>
                        </>

                    ) : (
                        <>
                        <button className="wish-list" onClick={handleClickRemove} style={wishstyle}>
                            <span className="added">Wish List</span>
                            <span className="remove">Remove</span>
                        </button>
                        <button className="add-movie" onClick={handleClickAdd} style={addstyle}>+ Add</button>
                        </>
                    )
                    }
                </div>
            
                <div className="movie-info" onClick={props.open}>
                    <h3 className="movie-popularity">{props.movie.popularity}</h3>
                    <h1 className="movie-title">{props.movie.title}</h1>
                </div>
        </div>
        
    )
}

export const ModalFormat = (props) => {

    const [wishstyle, setWishstyle] = useState({display: "block"})
    const [addstyle, setAddstyle] = useState({display: "block"})
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/wishlist')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setWishlist(data);
          });
        }, [])
    
    
    const handleClickAdd= () => {
        AddMovieToWishlist(props.modal.movie)
        setAddstyle({display: "none"})
        setWishstyle({display: "block"})
    }

    const handleClickRemove= () => {
        RemoveMovieFromWishlist(props.modal.movie)
        setWishstyle({display: "none"})
        setAddstyle({display: "block"})
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="poster-container">
                    <span className="close-modal" onClick={props.close}>&times;</span>
                    {props.modal.movie.poster_path ? (
                        <img 
                        src={`${IMG_URL+props.modal.movie.poster_path}`}
                        alt={`${props.modal.movie.title} poster`}
                        />
                    ) : (
                        <div className="filler-poster"></div>
                    )}
                </div>
                <div className="modal-movie-info">
                    {wishlist.find((obj) => obj.id === props.modal.movie.id) ? (
                        <>
                        <button className="add-movie" onClick={handleClickAdd} style={addstyle}>+ Add</button>
                        <button className="wish-list" onClick={handleClickRemove} style={wishstyle}>
                            <span className="added">Wish List</span>
                            <span className="remove">Remove</span>
                        </button>
                        </>

                    ) : (
                        <>
                        <button className="wish-list" onClick={handleClickRemove} style={wishstyle}>
                            <span className="added">Wish List</span>
                            <span className="remove">Remove</span>
                        </button>
                        <button className="add-movie" onClick={handleClickAdd} style={addstyle}>+ Add</button>
                        </>
                    )
                    }

                    <h1 className="modal-movie-title">{props.modal.movie.title}</h1>
                    <h3 className="modal-movie-release-date"><span>release date: </span>{props.modal.movie.release_date}</h3>
                    <h3 className="modal-movie-popularity"><span>popularity: </span>{props.modal.movie.popularity}</h3>
                </div>
                <p className="movie-desc">
                    {props.modal.movie.overview}
                </p>
            </div>
        </div>
    )
}