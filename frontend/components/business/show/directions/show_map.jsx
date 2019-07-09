import React from 'react'
const ShowMap =(props)=>{
    const {business}=props
return(
<div className="ShowMap">
    <img src="https://i.imgur.com/KDOjFXw.png"/>
    <div>
        <p><i className="fas fa-map-marker-alt"></i>{business.address}</p> 
        <p><i className="fas fa-directions"></i> <a href="search">Get Directions</a></p>
        <p><i className="fas fa-phone-alt"></i>{business.phone_number}</p>
        <p><i className="fas fa-external-link-alt"></i> business.website.com</p>


    </div>


</div>)}

export default ShowMap