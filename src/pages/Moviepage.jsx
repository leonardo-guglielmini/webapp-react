import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import ReviewCard from "../components/Card/ReviewCard";
import ReviewForm from "../components/Form/ReviewForm";

function Moviepage(){
    
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/movies/${id}`);
                setMovie(res.data);
            } 
            catch (err) {
                console.error(err);
            }
        };
        fetchMovies();
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
            <ReviewForm movieId={id}></ReviewForm>
            </> : <div>Loading...</div>
    )
}
export default Moviepage