import React, { useState } from 'react';
import '../UploadPhoto/Uploadphoto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CHANGE_AVATAR } from "../../../store/actions/auth"
import { useDispatch } from "react-redux"

export default function Uploadphoto (props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleInput = e => {
    setInput(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.clickModal(e);
    dispatch(CHANGE_AVATAR(input));
  };

    return (
        <div className="wrapper">
          <div className="form-wrapper">
            <FontAwesomeIcon
                className="close"
                icon='window-close'
                onClick={props.clickModal} 
            /> 
            <h1>Update Photo</h1>
            <label for="myfile">Select a file:</label>
            <input 
              type="file" 
              id="myfile" 
              onChange={handleInput}
              name="myfile"/>

          <form onSubmit={handleSubmit}>
            <div className="createAccount">
              <button type="submit" > 
                Upload Photo
                  <FontAwesomeIcon
                    className="iconawesome"
                    icon='upload'
              />
              </button>
              </div>
            </form>
            </div>
         </div>
      
      );
  }
  
