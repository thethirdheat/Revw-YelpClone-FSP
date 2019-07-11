import React from 'react'
const Stars = (props)=>{
    //let amount =props.amount 
    let count = props.amount


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
    const arStar=<div className="StarsPlain">
        {star()}
        {star()}
        {star()}
        {star()}
        {star()}
    </div>


    return (<div>
        {arStar}

    </div>
)}
export default Stars