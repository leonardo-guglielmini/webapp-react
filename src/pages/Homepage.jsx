import {useEffect, useState} from "react";
import axios from "axios";

import MovieCard from "../components/Card/MovieCard";

function Homepage(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/movies");
                setMovies(res.data);
            } 
            catch (err) {
                console.error(err);
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        console.log(movies);
    }, [movies]);
    
    
    return(
        <>
        Homepage
        {movies.map(movie=>{
            return <li key={movie.id}>
                <MovieCard movie={movie}></MovieCard>
            </li>
        })}
        </>
    )
}
export default Homepage