import React from "react";
import * as M from "C:/User/users/Desktop/umc-weekbook/src/Components/Movie/Movie.style"
import { useNavigate } from "react-router-dom";

/*const TV = () => {
    return <h1>
        TV 프로그램
    </h1>;
};*/

const domain = "https://image.tmdb.org/t/p/w1280/";

export default function TV({name, vote_average, poster_path}){
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate(
            '/tv/${name}', {
                state: {domain},
                poster_path: {poster_path},
            }
        )
    }

    return(
        <M.Contain onClick = {onClickImg}>
            <M.Imag src={domain + poster_path} alt={name}>                
            </M.Imag>

            <M.Text>
                <h4>
                    {name}
                </h4>

                <span>
                    {vote_average}
                </span>
            </M.Text>
        </M.Contain>
    );
}