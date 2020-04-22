import React, { useState, useEffect,} from "react";
import "../Categorydetail/filterdetail.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movieDetail, getAllGenre, getGenre } from "../../store/actions/movie_data";
import SlideCast from '../Mainphoto/Slider/Slider'


const Filterdetail = ({ movieDetail, movies, genres }) => {
  const [detail, setDetail] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    movieDetail(id);
    getAllGenre();
  }, [movieDetail]);

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

  if (!movies) return <div className="no-load">loading..</div>;

  return (
    <div className="container__detailfilm">
      <div className="list-genre">
        <h2>Genres</h2>
        {listGenre}
      </div>
      <div className="detail__fullycontainer">
      <div className="Mainphoto">
      <div className="cover-atas">
          <img src={movies.poster}
            alt="logo"/>
        </div>
        <div className="container-desc">
          <h2 className="movies-title">{movies.title}</h2>
          <FontAwesomeIcon className="iconawesome" icon="star" />
          <FontAwesomeIcon className="iconawesome" icon="star" />
          <FontAwesomeIcon className="iconawesome" icon="star" />
          <FontAwesomeIcon className="iconawesome" icon="star" />
          
          <div>
          <p id="title-synopsis">
          <img src={require("../../assets/information.svg")} alt="logo" />
            The Synopsis</p>
          <p>
          {movies.synopsis}
          </p>
          </div>

  
          <div className="movie-info">
            <ul className="bold">
              <li >
              <img src={require("../../assets/video.svg")} alt="logo" />
                Release date:</li>
              <li>
              <img src={require("../../assets/director.svg")} alt="logo" />
                Director :</li>
              <li>
              <img src={require("../../assets/editor.svg")} alt="logo" />
                Writers:</li>
            </ul>
            <ul>
              <li id="lists">{movies.year}</li>
              <li id="lists">{movies && movies.directors && movies.directors[0].name}</li>
              <li id="lists">{movies && movies.writers && movies.writers[0].name}</li>
              <li id="lists">{movies && movies.casts && movies.casts.name}</li>
            </ul>
          </div>

          <SlideCast/>

          <div className="button-play">
            <a href="/">Watch Trailer</a>
            <a href="/">Add WatchList</a>
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieData.movies,
    genres: state.movieData.genres
  };
};

export default connect(mapStateToProps, { movieDetail, getAllGenre, getGenre })(Filterdetail);
