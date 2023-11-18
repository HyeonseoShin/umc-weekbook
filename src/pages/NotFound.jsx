import React from "react";
import { useNavigate } from "react-router-dom";

/*const NotFound = () => {
    return <h1>
        NotFound
    </h1>;
};*/

export default function NotFound()
{
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate('/',{});
    };

    return (
        <div style={
                {
                    margin : "5vw"
                }
            }
        >
            <h1>
                Cannot Find the Adress!
            </h1>

            <p>
                Wrong Adress
            </p>

            <p>
                Page Not Available
            </p>

            <b onClick = {
                onClickImg
                }
            >
                Main Page
            </b>
        </div>
    );
}