import React from 'react'
import RatingStars from './rating'
const ShowInfo =(props)=>{
    const {business}=props
    console.log(props,'this is in showInnfo1')
return(
<div className="ShowInfo">
    <h1>{business.business_name}</h1>
    it should be here!!!!!!!!!!!

    <RatingStars stars={4}/>
    <div>this is the rating!!!</div> <div>this is reveiwe count</div>
    <p>{business.price} {business.business_type}</p>


</div>)}

export default ShowInfo