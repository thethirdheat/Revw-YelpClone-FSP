import React from 'react'
const ShowMap =(props)=>{
    const {business}=props
return(
<div>
    <img src="https://i.imgur.com/KDOjFXw.png"/>
    <i className="fas fa-map-marker-alt"></i><div><p>{business.address}</p></div>


</div>)}

export default ShowMap