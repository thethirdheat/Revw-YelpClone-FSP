import React from 'react'
const ShowMap =(props)=>{
    const {business}=props
return(
<div className="ShowMap">
    <div>
        <img className="ShowMap--Image" src="https://i.imgur.com/KDOjFXw.png"/>
        <div>
            <div className="ShowMap--Address">
                <div> 
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <p>{business.address}</p>
                    <p>San Francisco, CA 94110</p>
                    <p>b/t Dolores St & Oakwood St </p> 
                </div>

            </div>

            <p><i className="fas fa-directions"></i> <a href="search">Get Directions</a></p>
            <p><i className="fas fa-phone-alt"></i>{business.phone_number}</p>
            <p><i className="fas fa-external-link-alt"></i> business.website.com</p> 

        </div> 
    </div>


</div>)}

export default ShowMap