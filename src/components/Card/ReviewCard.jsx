/* eslint-disable react/prop-types */

function ReviewCard({review}) {
    const {vote, text} = review

    return(
        <div>
            {vote}
            {text}
        </div>
    )
}
export default ReviewCard