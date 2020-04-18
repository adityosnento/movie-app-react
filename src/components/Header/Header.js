import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Header/Header.scss";
import {Link} from 'react-router-dom'

import Upload from "../Auth/UploadPhoto/Uploadphoto";
import Signin from "../Auth/login/login";
import Profile from "../Auth/updateProfile/Updateprofile";
import Signup from "../Auth/register/register";

import { SIGN_OUT } from "../../store/actions/auth";
import {searchGenre} from "../../store/actions/movie_data";

const Header = () => {
  const [modal, setModal] = useState("");
  const [search, setSearch] = useState("");
  
  const profile = "profile";
  const signup = "signup";
  const avatar = "avatar";
  const signin = "signin";

  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  const stateUser = useSelector(state => state.auth.userData)


  useEffect(() => {
    localStorage.getItem('userData') && dispatch({type: "GET_USER"})
  }, [])

  const clickModal = e => {
    setModal({
      [e.target.id]: !modal[e.target.id]
    });
  };

  const logout = () => {
    console.log("logoutsucces")
    dispatch(SIGN_OUT());
  };

  const searchMovie = () => {
    console.log("halo")
    dispatch(searchGenre(search));
  }


  return (
    <div className="header">
      <div className="header__logo-box">
        <a href="/">
        <img
          src={require("../../assets/popcorn.png")}
          alt="logo"
          className="header__logo"
        />
        </a>
      </div>
      <div className="container-navbar">
        <ul>
        <div className="container-search">
        <div className="searchbox">
          <input
            type="text"
            className="searchbox__input"
            placeholder="Search Movies Here .."
            onChange={e => {
              setSearch(e.target.value)
              searchMovie()
            }}
          />
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="searchbox__icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </div>
      </div>
          {!isLogin ? (
            <li>
              <a class="dropbtn" href="/#" onClick={clickModal} id={signin}>
                Sign in
              </a>
            </li>
          ) : (
            <div class="dropdown">
              <img
                src={stateUser.image}
                alt="logo"
                className="header__logo"
              />
              <p>Hi. Adit</p>
              <div class="dropdown-content">
                <a href="/#" onClick={clickModal} id={profile}>Update Profile</a>
                <a href="/#" onClick={clickModal} id={avatar}>Update Avatar</a>
                <a href="/#" onClick={logout}>Sign Out</a>
              </div>
            </div>
          )}
        </ul>
      </div>
      {modal[signup] ? (
        <Signup clickModal={clickModal} signin={signin} />
      ) : (
        false
      )}
      {modal[signin] ? (
        <Signin clickModal={clickModal} signup={signup} />
      ) : (
        false
      )}
      {modal[profile] ? <Profile clickModal={clickModal} /> : false}
      {modal[avatar] ? <Upload clickModal={clickModal} /> : false}
    </div>
  );
};

export default (Header);
