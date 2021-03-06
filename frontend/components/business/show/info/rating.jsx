import React from 'react'

const RatingStars = (props)=>{
    //console.log(props)
    let count=props.stars
    let scaled=""
    if(props.scaled==true){
        scaled="RatingScaledDown" 
    }
    let amount =3 


    const star=()=>{
        if(count>=1){
            count--
            return <div className="RB Rating--background__red"><i className="fas fa-star Rating--star__red"></i></div>
        }else if(count<1 && count>=0.5){ 
            count=0
            return <div className="RB Rating--background__half"> <div className="half_div"> <div className="half_color"></div> <i className="z-index-up fas fa-star Rating--star__half"></i></div></div>
        }else{
            return <div className="RB Rating--bacground__white"> <i className="fas fa-star  Rating--star__white"></i> 
                </div>        }
    }
    return(
    <div className={`RatingStars ${scaled}`}>
        {star()}
        {star()}
        {star()}
        {star()}
        {star()} 
        {props.rating?<span className={ `Ratings--ReveiewAmount`}>&nbsp; {amount}&nbsp; reviews</span> :""}
    </div>
)}

export default RatingStars