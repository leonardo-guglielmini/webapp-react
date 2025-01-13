import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import ReviewCard from "../components/Card/ReviewCard";
import ReviewForm from "../components/Form/ReviewForm";

function Moviepage(){
    
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    function fetchMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
        .then(res => {
            setMovie(res.data)
        })
        .catch(err => {
            console.error(err)
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
        movie ? <>
            {title}
            {abstract}
            <img src={image}/>
            {reviews && reviews.map(review=>(
                <ReviewCard review={review} key={review.id}></ReviewCard>
            ))}
            <ReviewForm movieId={id} onStoreReview={fetchMovie}></ReviewForm>
            </> : <div>Loading...</div>
    )
}
export default Moviepage