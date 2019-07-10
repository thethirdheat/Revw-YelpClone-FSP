import React from 'react'
const ShowMap =(props)=>{
    const {business}=props
return(
<div className="ShowMap">
    <div>
        <img className="ShowMap--Image" src="https://i.imgur.com/KDOjFXw.png"/>
        <div className="ShowMap--Grid">


            <div className="ShowMap--Address__Left"> 
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="ShowMap--Address__Right">
                <p>{business.address}</p>
                <p>San Francisco, CA 94110</p>
                <p>b/t Dolores St & Oakwood St </p> 
            </div>



            <div className="ShowMap--Directions__Left">
                <i className="fas fa-directions"></i> 
            </div>

            <div className="ShowMap--Directions__Right">
                <p><a href="search">Get Directions</a></p>
            </div>

            <div className="ShowMap--Phone__Left">
                <i className="fas fa-phone-alt"></i>
            </div>

            <div className="ShowMap--Phone__Right">
                <p>{business.phone_number}</p>
            </div>

            <div className="ShowMap--Link__Left">
                <i className="fas fa-external-link-alt"></i> 
            </div>

            <div className="ShowMap--Link__Right">
                <p>business.website.com</p> 
            </div>

        </div> 
    </div>


</div>)}

export default ShowMap