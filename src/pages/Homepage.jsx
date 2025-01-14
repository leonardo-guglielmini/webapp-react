import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Container} from "react-bootstrap";
import GlobalContext from "../contexts/GlobalContext";

import MovieCard from "../components/Card/MovieCard";

import style from "./Homepage.module.css";

function Homepage(){

    const [movies, setMovies] = useState([])
    
    const {setLoading} = useContext(GlobalContext)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const res = await axios.get("http://localhost:3000/api/movies");
                setMovies(res.data);
            } 
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
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