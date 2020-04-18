import React from "react";
import { connect } from "react-redux";
import "./Cardmovie.scss";
import { Link } from "react-router-dom";
import {
  getMovies,
  getAllGenre,
  getGenre,
  movieDetail
} from "../../../store/actions/movie_data";

const CardMovie = ({ 
  getMovies, 
  getAllGenre, 
  movies, 
  genres, 
  getGenre,
  movieDetail
}) => {
  
  const doPage = getMovies;
  const response = movies;

  React.useEffect(() => {
    getMovies();
    getAllGenre();
    movieDetail();
  }, []);
  
  
  
  const lists =
    movies &&
    movies.docs.map(item => (
      <Link to={`/${item._id}`} 
      key={item._id} 
      className="card-container"
      onClick={() => movieDetail(item._id) }
      >
        <img src={item.poster} alt="movie_picture" />
        <h3>{item.title}</h3>
        {/* {item.genres.map(list => (
          <span>{list.genre}</span> */}
        {/* ))} */}
         
      </Link>
    ));

  const listGenre =
    genres &&
    genres.map(genre => (
      <button
        key={genre._id}
        className={genre === (genre.genre) ? "btn_listgenre" : ""}
        onClick={() => getGenre(genre.genre)}
      >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compact-disc" class="svg-inline--fa fa-compact-disc fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>
        {genre.genre}
      </button>
    ));

  const pagination = [];

  if (response) {
    if (response.prevPage)
      pagination.push(
        <h3
          key="page-prev"
          className="hover mx-1"
          onClick={() => doPage(response.prevPage)}
        >
          &lt;
        </h3>
      );
    for (let i = 1; i <= response.totalPages; i++) {
      pagination.push(
        response.page === i ? (
          <h3 key={"page-" + i} className="text-black mx-1">
            {i}
          </h3>
        ) : (
          <h3
            key={"page-" + i}
            className="hover mx-1"
            onClick={() => doPage(i)}
          >
            {i}
          </h3>
        )
      );
    }
    if (response.nextPage)
      pagination.push(
        <h3
          key="page-next"
          className="hover mx-1"
          onClick={() => doPage(response.nextPage)}
        >
          &gt;
        </h3>
      );
  }

  if (!movies) return <div className="no-load">loading..</div>
  
  
  return (
    <div className="body-container">
      <div className="list-genre">
        <h2>Genres</h2>
        {listGenre}
        </div>
      <div className="list-film">
      {lists}
      </div>
     
      <div className="pagination">{pagination}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieData.movies,
    genres: state.movieData.genres
  };
};

export default connect(mapStateToProps, { getMovies, getAllGenre, getGenre, movieDetail })(
  CardMovie
);
