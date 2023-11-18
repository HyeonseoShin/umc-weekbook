// import { useState } from "react";
import React, {useState} from "react";

const rfc = "https://image.tmdb.org/t/p/w1280/";

function Movie({poster_path,title,vote_average,overview})
{
    const t={display: "block"};
    const f={display: "none"};
    const [ppn,set] = useState(false);

    const cursorOver=() =>
    {
        set(true);
    };

    const cursorOut=() =>
    {
        set(false);
    };

    return(
        <div className="contain" onMouseOver={cursorOver} onMouseOut={cursorOut}>
            <img className="image" src={rfc+poster_path} alt={title}>

            </img>

            <div className="text">
                <b>
                    {title}
                </b>

                <span>
                    {vote_average}
                </span>
            </div>

            <div className="inform" style={ppn ? t : f}>
                <b>
                    {title}
                </b>

                <span>
                    {overview}
                </span>
            </div>
            
        </div>
    )
}

export default Movie;