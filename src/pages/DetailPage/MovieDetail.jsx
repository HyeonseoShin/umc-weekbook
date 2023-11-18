import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Movie from "../Movies";

<Route path="/movie/Movie" element={Movie}>

</Route>

export default function MovieDetail()
{
    const { title } = useParams();
    const { state } = useLocation();

    console.log(title);
    console.log(state);

    return(
        
        <div style={
                {
                    display: "flex",
                    margin: "100px",
                }
            }
        >
            <img src={state.domain["domain"]+state.poster_path["poster_path"]} alt={ title } style={{width: "300px",}}>

            </img>
            
            <h2>
                {title}
            </h2>
        </div>
    )
}