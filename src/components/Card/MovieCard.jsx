/* eslint-disable react/prop-types */
import { Link } from "react-router"

import Card from "react-bootstrap/Card"
import style from "./MovieCard.module.css"

function MovieCard({movie}){
    const {id,title,abstract,image} = movie
    
    return(
        <Card className={style.card}>
            <h2>{title}</h2>
            <p className={style.abstract}>{abstract}</p>
            <img src={image}/>
            <Link to={`/movies/${id}`}>Details...</Link>
        </Card>
    )
}
export default MovieCard