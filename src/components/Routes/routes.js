import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

//MainPage
import Slider from "../Mainphoto/Slider/Slider";
import CardMovie from "../MainPage/Genre_Movie/Cardmovie";

//DescPage
import FilterDetail from "../Categorydetail/filterdetail";
import Mainphoto from "../Mainphoto/Mainphoto/Mainphoto";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        <div className="display-1">
          {/* <Slider /> */}
            <CardMovie />
        </div>
      </Route>

      <Route path="/:id">
        <div className="display">
          <FilterDetail />
        </div>
      </Route>
    </Router>
  );
};

export default connect()(Routes);
