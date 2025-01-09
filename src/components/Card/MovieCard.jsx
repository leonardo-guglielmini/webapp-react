/* eslint-disable react/prop-types */

function MovieCard({movie}){
    const {title,genre,image} = movie
    
    return(
        <>
        {title}
        {genre}
        <img src={image}/>
        </>
    )
}
export default MovieCard