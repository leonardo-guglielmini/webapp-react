import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

import ReviewCard from "../components/Card/ReviewCard";
import ReviewForm from "../components/Form/ReviewForm";

import style from "./Moviepage.module.css"

import GlobalContext from "../contexts/GlobalContext";

function Moviepage(){
    
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    const {setLoading} = useContext(GlobalContext)

    function fetchMovie() {
        setLoading(true);
        axios.get(`http://localhost:3000/api/movies/${id}`)
        .then(res => {
            setMovie(res.data)
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchMovie()
    }, [id]);

    useEffect(() => {
        console.log(movie);
    }, [movie]);

    const {title, abstract, image, reviews} = movie;

    return(
        movie ? 
        <Container className={style.container}>
            <h2>{title}</h2>
            <img src={image}/>
            <p>{abstract}</p>
            {reviews && reviews.map(review=>(
                <ReviewCard review={review} key={review.id}></ReviewCard>
            ))}
            <ReviewForm movieId={id} onStoreReview={fetchMovie}></ReviewForm>
        </Container> : 
        <div>Loading...</div>
    )
}
export default Moviepage