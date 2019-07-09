import React from 'react'

const RatingStars = (props)=>{
    console.log(props)
    let count=props.stars

    const star=()=>{
        if(count>=1){
            count--
            return <div className="Rating--background__red"><i className="fas fa-star Rating--star__red"></i></div>
        }else if(count<1 && count>=0.5){ 
            count=0
            return <div className="Rating--background__half"> <span clasName="rating_half"></span><i className="fas fa-star Rating--star__half"></i></div>
        }else{
            return <div className="Rating--bacground__white"> <i className="fas fa-star  Rating--star__white"></i> 
                </div>        }
    }
    return(
    <div className="RatingStars">
        this hsoudl how
        {star()}
        {star()}
        {star()}
        {star()}
        {star()} 
    </div>
)}

export default RatingStars