import { POST, POST_REGISTER, ERROR, PUT } from "./types";
const baseURL = "https://gamovieapp.herokuapp.com/api";



export const registration = userData => async dispatch => {
  console.log("user", userData);

  try {
    const res = await fetch(`${baseURL}/user/register`, {
      method: POST,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    console.log(res);
    await res.json();
    dispatch({
      type: POST_REGISTER
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR
    });
  }
};




export const login = userData => async dispatch => {
  console.log("user", userData);
  try {
    const res = await fetch(`${baseURL}/user/login`, {
      method: POST,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const data = await res.json();
    console.log(data)
    if (data.data) {
      localStorage.setItem("userData",JSON.stringify({
        name: data.data.name,
        email: data.data.email,
        image: data.data.image
      }))
      localStorage.setItem("token", data.data.token);
    }
    dispatch({ type: "SUCCESS_LOGIN", payload: {
      name: data.data.name,
      email: data.data.email,
      image: data.data.image
    } });
    alert("login success");
  } catch (err) {
    alert("login error");
    console.log(err);
  }
};

export const SIGN_OUT = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const CHANGE_AVATAR = input => async dispatch => {

  const dataImage = new FormData();
  dataImage.append ("image",  input)

  try {
    const res = await fetch(`${baseURL}/user/updateImage`, {
      method: PUT,
      headers: {
        Authorization: (localStorage.getItem("token"))
      },
      body: dataImage
    });
    const data = await res.json();
    dispatch({ 
      type: "CHANGE_AVATAR",
      payload: data.data
    });
  } catch (err) {
    alert("Upload Failed");
    console.log(err);
  }
};



export const UPDATE_PROFILE = userData => async dispatch => {
  console.log(userData)
  try {
    const res = await fetch(`${baseURL}/user/updateProfile`, {
      method: PUT,
      headers: {
        Authorization: localStorage.getItem("token")
      },
      body: userData
    });
    const data = await res.json();
    console.log(data.data)
    dispatch({ 
      type: "UPDATE_PROFILE",
      payload: {
        name: data.data.name,
        email: data.data.email,
        image: data.data.image
      }
    });
  } catch (err) {
    alert("Update Failed");
    console.log(err);
  }
};

