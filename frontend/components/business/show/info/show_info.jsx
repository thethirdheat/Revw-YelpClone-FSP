import React from 'react'
const ShowInfo =(props)=>{
    const {business}=props
    console.log(props,'this is in showInnfo1')
return(
<div>
    <h1>{business.business_name}</h1>
    <div>this is the rating!!!</div> <div>this is reveiwe count</div>
    <p>{business.price} {business.business_type}</p>


</div>)}

export default ShowInfo