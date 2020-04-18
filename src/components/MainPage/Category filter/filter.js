import React, {useState} from 'react';
import './filter.scss'
import All from '../Genre_Movie/Cardmovie'

function Filter() {
    
    const all ="all";
    const action="action";
    const fantasy="fantasy";
    const romance="romance";
    const drama="drama";
    const biography="biography";

    const [genre, setGenre] = useState();

    return (    
        <div className="category">
           <h2>Browse by Category</h2>
            <ol className="filter__homepage">
                <li
                className={genre === all ? "active" : ""}
                onClick={() => setGenre(all)}
                >All
                </li>
                <li
                className={genre === action ? "active" : ""}
                onClick={() => setGenre(action)}
                >Action
                </li>
                <li
                className={genre === fantasy ? "active" : ""}
                onClick={() => setGenre(fantasy)}
                >Fantasy
                </li>
                <li
                className={genre === romance ? "active" : ""}
                onClick={() => setGenre(romance)}
                >Romance
                </li>
                <li
                className={genre === drama ? "active" : ""}
                onClick={() => setGenre(drama)}
                >Drama
                </li>
                <li
                className={genre === biography ? "active" : ""}
                onClick={() => setGenre(biography)}
                >Biography
                </li>
            </ol>
            <div>
                {genre === all ? <All/> : false}
               {/* 
               {genre === fantasy ? <Fantasy/> : false }
               {genre === romance ? <Romance/> : false }
               {genre === drama ? <Drama/> : false }
               {genre === biography ? <Biography/> : false }  */}
            </div>
        </div>
    )
}

export default Filter;