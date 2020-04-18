import React from 'react';
import {connect} from 'react-redux';
import '../Overview/Overview.scss';

const Overview = () => {
    return (
        <div id="Synopsis" className="overview-container">
            <h3 >Synopsis</h3>
            <p>Parasite (Korean: 기생충; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, and Jang Hye-jin and follows the members of a poor family who scheme to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.</p>
            <h3>Movie Info</h3>
            <div className="movie-info">
                <ul className="bold">
                    <li>Release date:</li>
                    <li>Director :</li>
                    <li>Featured Song:</li>
                    <li>Budget:</li>
                </ul>
                <ul>
                    <li>February,2020</li>
                    <li>John Doe</li>
                    <li>Older</li>
                    <li>800 million USD</li>
                </ul>
            </div>
        </div>

    )
}

export default connect()(Overview);