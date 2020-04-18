import React, { useState, useEffect, useSelector } from "react";
import "../Categorydetail/filterdetail.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Synopsis from "../DetailPage/Overview/Overview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cast from "../DetailPage/Cast/Moviedesc";
import Review from "../DetailPage/Review/Review";
import { movieDetail } from "../../store/actions/movie_data";

const Filterdetail = ({ movieDetail, movies }) => {
  const [detail, setDetail] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    movieDetail(id);
  }, [movieDetail]);

  if (!movies) return <div className="no-load">loading..</div>;

  return (
    <div>
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
          <p id="title-synopsis">The Synopsis</p>
          <p>
          {movies.synopsis}
          </p>
          <p id="title-synopsis">The Synopsis</p>
          <p>
         
          </p>
          <div className="button-play">
            <button>Watch Trailer</button>
            <button>Add WatchList</button>
          </div>
        </div>
        
      </div>
      <div className="detail-container">
        <div id="Synopsis" className="overview-container">
          <h3>Synopsis</h3>
          <p>{movies.synopsis}</p>
          <h3>Movie Info</h3>
          <div className="movie-info">
            <ul className="bold">
              <li>Release date:</li>
              <li>Director :</li>
              <li>Rating:</li>
              <li>Writers:</li>
            </ul>
            <ul>
              <li>{movies.year}</li>
              <li>{movies && movies.directors && movies.directors[0].name}</li>
              <li>{movies.rating} of 10</li>
              <li>{movies && movies.directors && movies.writers[0].name}</li>
            </ul>
          </div>
        </div>
        <div className="desc-container">
          <div className="cast-title">
            <h3 id="Cast">Series of Cast</h3>
            <ol className="people">
              <li className="card">
                <img src={require("../../assets/people/7.jpg")} alt="logo" />
                <p className="cast-name">James Taylor</p>
                <p className="character">Obi-Wan Kenobi, </p>
              </li>
              <li className="card">
                <img src={require("../../assets/people/6.jpg")} alt="logo" />
                <p className="cast-name">James Taylor</p>
                <p className="character">Obi-Wan Kenobi, </p>
              </li>
              <li className="card">
                <img src={require("../../assets/people/5.jpg")} alt="logo" />
                <p className="cast-name">James Taylor</p>
                <p className="character">Obi-Wan Kenobi, </p>
              </li>
              <li className="card">
                <img src={require("../../assets/people/4.jpg")} alt="logo" />
                <p className="cast-name">James Taylor</p>
                <p className="character">Obi-Wan Kenobi, </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="review-container">
          <div className="menu">
            <h3 className="auto" id="Social">
              Social
            </h3>
            <ul>
              <li>Review</li>
            </ul>
          </div>

          <div className="comment_container">
            <div className="grouped">
              <div className="avatar">
                <img
                  src={require("../../assets/people/comment.jpg")}
                  alt="logo"
                />
              </div>
              <div className="info">
                <div className="rating-wrapper">
                  <h3>Adityo S. Nento</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="comment_container">
            <div className="grouped">
              <div className="avatar">
                <img
                  src={require("../../assets/people/comment.jpg")}
                  alt="logo"
                />
              </div>
              <div className="info">
                <div className="rating-wrapper">
                  <h3>A Review by Adityo S. Nento</h3>
                </div>
              </div>
              <FontAwesomeIcon className="iconawesome" icon="star" />
          <FontAwesomeIcon className="iconawesome" icon="star" />
          <FontAwesomeIcon className="iconawesome" icon="star" />
            </div>
            <div className="comment-review">
              <p>
                The working class and down on their luck Kim family struggle to
                make ends meet. When a friend of the son, Ki-Woo’s, who is an
                English tutor for the daughter in the wealthy Park family, has
                to leave his position, he recommends Ki-Woo for the job. Now
                having an "in" with the wealthy family, the Kims begin plotting
                the downfall of the current household servants and inserting
                themselves into those vacant positions, making them all
                gainfully employed and with money finally flowing into the
                household. But not everything is as it seems in the Park house
                or with their previous servants.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieData.movies
  };
};

export default connect(mapStateToProps, { movieDetail })(Filterdetail);
