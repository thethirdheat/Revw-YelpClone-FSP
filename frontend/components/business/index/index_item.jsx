import React from 'react'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';


import RatingStars from '../show/info/rating'
const IndexItem =(props)=>{

    //console.log(props)
    let dollars=""
    for(let i=0;i<props.business.price;i++){
        dollars+="$" 
    }
    //console.log('-----------------------------------------dolarrs----------------------------------------------',dollars)
    return (
        //onClick={()=>props.history.push(`/biz/${props.business.id}`)}
    <div className="IndexItemContainer" >
        <div className="IndexItem">
            <div className="IndexItem--Picture"> 
                <Link to= {`./biz/${props.business.id}`}><img className="IndexItem--Image" src={props.business.photoUrl}/></Link>
            </div>

            <div className="IndexItem--Right">
                <div className="IndexItem--Info">
                    <div className="IndexItem--Info__Left">
                        <p> <span className="IndexBold">{props.index}.<Link to={`./biz/${props.business.id}`}> {props.business.business_name} </Link></span></p>
                        <RatingStars stars={3} scaled={true} rating={true}/>

                        <p className="Index--GreyText">{ dollars.length? dollars: "$"} &nbsp;&#9679; &nbsp;{props.business.business_type}</p>

                    </div>

                    <div className="IndexItem--Info__Right">
                        <p className="Index--GreyText">{props.business.phone_number}</p> 
                        <p className="Index--GreyText">{props.business.address} </p>
                    </div>

                </div>
                <div className="IndexItem--Description">
                    <p className="Index--GreyText">"{props.business.description}"</p> 
                    {<button onClick={()=>props.remove(props.business.id)}>DElete</button>}
                </div>


            </div>

        </div>



    </div>)

}
export default withRouter(IndexItem)