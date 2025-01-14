/* eslint-disable react/prop-types */

import {useState} from "react"
import axios from "axios"

import style from "./ReviewForm.module.css"

function ReviewForm({movieId, onStoreReview = () =>{}}){

    const baseFormData = {
        name:"",
        vote:"",
        text:""
    }

    const [formData, setFormData] = useState(baseFormData)

    function storeReview(e){
        e.preventDefault()

        const data ={
            name: formData.name,
            vote: formData.vote,
            text: formData.text
        }

        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, data)
        .then(res=>{
            console.log(res)
            setFormData(baseFormData)
            onStoreReview()
        })
        .catch(err=>{
            console.error(err)
        })
    }

    function onFormChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className={style.reviewForm}>
            <h5>Insert your review!</h5>
            <div>
                <form onSubmit={storeReview}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={onFormChange} required></input>
                    <label htmlFor="vote">Vote</label>
                    <input type="text" name="vote" id="vote" value={formData.vote} onChange={onFormChange} required></input>
                    <label htmlFor="text">Review</label>
                    <input type="text" name="text" id="text" value={formData.text} onChange={onFormChange} required></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm