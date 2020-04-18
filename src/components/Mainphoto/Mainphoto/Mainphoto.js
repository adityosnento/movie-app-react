import React from 'react';
import {connect} from 'react-redux';
import '../Mainphoto/Mainphoto.scss';

const Mainphoto = () => {
    return (
        <div className="Mainphoto">
            <div className="container-desc">
                <h1>Parasite</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eius md tempor incidudnt ut labore et dolore magne alique. lorem ipsum dolor sit, consectuter adipiscing elit, sed do</p>
                <div className="button-play">
                    <button className="button-plays">Watch Trailer</button>
                    <button>Add WatchList</button>
                </div>
            </div>
        </div>

    )
}

export default connect()(Mainphoto);