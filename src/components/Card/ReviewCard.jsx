/* eslint-disable react/prop-types */

function ReviewCard({review}) {
    const {name, vote, text} = review

    return(
        <div>
            <p>{name}</p>
            <p>{vote} - {text}</p> 
        </div>
    )
}
export default ReviewCard