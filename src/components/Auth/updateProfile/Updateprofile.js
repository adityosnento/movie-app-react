import React, { useState } from "react";
import "../updateProfile/Updateprofile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE } from "../../../store/actions/auth";

export default function UpdateProfile(props) {
  const stateUser = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: stateUser.name
  });

  const handleInput = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.clickModal(e);
    console.log("handleInput");
    dispatch(UPDATE_PROFILE(input));
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <FontAwesomeIcon
          className="close"
          icon="window-close"
          onClick={props.clickModal}
        />
        <h1>Update Profile</h1>

        <form onSubmit={handleSubmit}>
          <div className="name">
            <label>Name</label>
            <input
              type="text"
              placeholder="Update Name"
              id="name"
              value={input.name}
              required
              onChange={handleInput}
              name="name"
            />
          </div>
        </form>

        <div className="updateProfile">
          <button type="submit">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
