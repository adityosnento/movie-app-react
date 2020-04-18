import React from 'react';
import {connect} from 'react-redux';
import './Moviedesc.scss';

const Moviedesc = () => {
    return (
        <div className="desc-container">
           <div className="cast-title">
               <h3 id="Cast">Series of Cast</h3>
               <ol className="people">
                   <li className="card">
                       <img 
                        src={require('../../../assets/people/7.jpg')} 
                        alt="logo"
                        />
                        <p className="cast-name">James Taylor</p>
                        <p className="character">Obi-Wan Kenobi, </p>
                   </li>
                   <li className="card">
                       <img 
                        src={require('../../../assets/people/6.jpg')} 
                        alt="logo"
                        />
                        <p className="cast-name">James Taylor</p>
                        <p className="character">Obi-Wan Kenobi, </p>
                   </li>
                   <li className="card">
                       <img 
                        src={require('../../../assets/people/5.jpg')} 
                        alt="logo"
                        />
                        <p className="cast-name">James Taylor</p>
                        <p className="character">Obi-Wan Kenobi, </p>
                   </li>
                   <li className="card">
                       <img 
                        src={require('../../../assets/people/4.jpg')} 
                        alt="logo"
                        />
                        <p className="cast-name">James Taylor</p>
                        <p className="character">Obi-Wan Kenobi, </p>
                   </li>
               </ol>

           </div>
        </div>
       

    )
}

export default connect()(Moviedesc);