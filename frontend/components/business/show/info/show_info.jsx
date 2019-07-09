import React from 'react'
import RatingStars from './rating'
const ShowInfo =(props)=>{
    const {business}=props
    console.log(props,'this is in showInnfo1')
    let price=""
    for(let i =0;i< business.price;i++){
        price+="$"
    }
return(
<div className="ShowInfo">
    <h1>{business.business_name}</h1>
    <RatingStars stars={2.5}/> 
    <p>{price} &nbsp;&#9679; &nbsp;{business.business_type}</p>


</div>)}

export default ShowInfo