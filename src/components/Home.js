import { useState, useEffect } from "react";
import { MovieFormat, ModalFormat } from "./MovieFormat";

const API_KEY = 'api_key=3646c928b1d09ad843c146504a0749e0';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const SEARCH_URL = BASE_URL + '/search/movie?'+API_KEY

const Home = ({page}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [style, setStyle] = useState({display: "flex"})
  const [currentpage, setCurrentpage] = useState(page)
  const [modalstate, setModalstate] = useState({"open": false, "movie": []})

  useEffect(() => {
    fetch(API_URL+"&page="+page)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        setResults(data.results);
        setCurrentpage(data.page);
    });
  }, [])

  const handleClickNext = () => {
    setCurrentpage(currentpage)
  }

  const handleClickPrev = () => {
    setCurrentpage(currentpage)
  }

  const handleChange = e => {
    setStyle({display: "none"})
    setSearchTerm(e.target.value);
    fetch(SEARCH_URL+'&query='+searchTerm)
      .then((res) => res.json())
      .then((data) => {
      if (!data.errors) {
        console.log(searchTerm)
        setResults(data.results);
      } else {
        setResults([]);
        }
      });
  };

  return (
    <>
      <form className="form">
        <input
          placeholder="Search Movie"
          className="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      <div className="movie-list">
        {results.length > 0 && (
        results.map((movie) => (
          <div className="movie" key={movie.id}>
            <MovieFormat 
            movie={movie}
            open={() => {setModalstate({"open": true, "movie": movie})}}
            />
          </div>
        ))
        )}

        {results.length === 0 && (
          <h1 className="no-result">No result :(</h1>
        )}
      </div>

      {modalstate.open && (
        <ModalFormat 
        modal={modalstate}
        close={() => {setModalstate({"open": false, "movie": []})}}
        />
      )}

      {currentpage === 1 ? (
          <div className="page-button" style={style}>
            <button className="next-button" onClick={handleClickNext}><a href={"/movie-list/home/page="+(currentpage + 1).toString()}>Next 20</a></button>
          </div>
          ) : (
          currentpage === 20 ? (
            <div className="page-button" style={style}>
              <button className="prev-button" onClick={handleClickPrev}><a href={"/movie-list/home/page="+(currentpage - 1).toString()}>Previous 20</a></button>
            </div>
          ) : (
            <div className="page-button" style={style}>
              <button className="prev-button" onClick={handleClickPrev}><a href={"/movie-list/home/page="+(currentpage - 1).toString()}>Previous 20</a></button>
              <button className="next-button" onClick={handleClickNext}><a href={"/movie-list/home/page="+(currentpage + 1).toString()}>Next 20</a></button>
          </div>
        )
        )}
    </>   
  )
}

export default Home;
