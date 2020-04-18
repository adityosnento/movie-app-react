import {POST_REGISTER} from "../actions/types";

const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {
        name: "",
        email: "",
        image: ""
      },

  password: "",
  password_confirmation: "",
  isLogin: false
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_REGISTER:
      return {
        ...state
      };
    case "SUCCESS_LOGIN":
      return {
        ...state,
        isLogin: true,
        userData: {
          name: payload.name,
          email: payload.email,
          image: payload.image
        }
      };
    case "GET_USER":
      return {
        ...state,
        isLogin:true
      };
    case "CHANGE_AVATAR":
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state, image: action.payload.image })
      );
      return action.payload;

    case "SIGN_OUT":
      localStorage.clear();
      alert("You are successfully Logout");
      return {
        ...state,
        isLogin: false
      };

    case "UPDATE_PROFILE":
      localStorage.setItem("userData", [
        JSON.stringify({ ...state, fullname: action.payload.name })
      ]);
      console.log(state, action.payload);
      alert("Data successfully updated");
      return {
        ...state,
        userData: {
          name: payload.name,
          email: payload.email,
          image: payload.image
        }
      };

    default:
      return {
        ...state
      };
  }
};

export default auth;
