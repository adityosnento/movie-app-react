import React from 'react';
import {connect} from 'react-redux';
import '../Review/Review.scss';

const Review = () => {
    return (
        <div className="review-container">
           <div className="menu">
               <h3 className="auto" id="Social">Social</h3>
               <ul>
                   <li>Review</li>
               </ul>
           </div>

           <div className="comment_container">
                <div className="grouped">
                   <div className="avatar">
                       <img 
                       src={require('../../../assets/people/comment.jpg')} 
                       alt="logo"/>
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
                       src={require('../../../assets/people/comment.jpg')} 
                       alt="logo"/>
                   </div>
                   <div className="info">
                       <div className="rating-wrapper">
                           <h3>A Review by Adityo S. Nento</h3>
                       </div>
                   </div>
               </div>
               <div className="comment-review">
                   <p>The working class and down on their luck Kim family struggle to make ends meet. When a friend of the son, Ki-Woo’s, who is an English tutor for the daughter in the wealthy Park family, has to leave his position, he recommends Ki-Woo for the job. Now having an "in" with the wealthy family, the Kims begin plotting the downfall of the current household servants and inserting themselves into those vacant positions, making them all gainfully employed and with money finally flowing into the household. But not everything is as it seems in the Park house or with their previous servants. </p>
               </div>
           </div>
        </div>
       

    )
}

export default connect()(Review);