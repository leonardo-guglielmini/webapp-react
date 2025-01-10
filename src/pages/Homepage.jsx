import {useEffect, useState} from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Container} from "react-bootstrap";

import MovieCard from "../components/Card/MovieCard";

import style from "./Homepage.module.css";

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
        <Container>
            Homepage
            <Row className={style.row}>
                {movies.map(movie=>{
                    return <Col className={style.col} key={movie.id}>
                        <MovieCard movie={movie}></MovieCard>
                    </Col>
                })}
            </Row>
        </Container>
    )
}
export default Homepage