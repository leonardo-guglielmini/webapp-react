/* eslint-disable react/prop-types */

import Card from "react-bootstrap/Card"
import style from "./MovieCard.module.css"

function MovieCard({movie}){
    const {title,abstract,image} = movie
    
    return(
        <Card className={style.card}>
            <h2>{title}</h2>
            <p>{abstract}</p>
            <img src={image}/>
        </Card>
    )
}
export default MovieCard