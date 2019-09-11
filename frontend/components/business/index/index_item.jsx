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
    let desc=props.business.description
    //debugger
    let descShortenedFlag=false
    const convertBizDesc=(desc)=>{
        console.log(desc)
        desc= desc.split(" ")
        if( desc.length>32){
            descShortenedFlag=true
            return desc.slice(0,31).join(' ').concat('...')
        }
        return desc
    }

    desc=convertBizDesc(desc)


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
                    <pre className="Index--GreyText">"{desc}" {descShortenedFlag?<Link to={"biz/".concat(props.business.id.toString())}>read more</Link>: ""}</pre>
                </div>


            </div>

        </div>



    </div>)

}
export default withRouter(IndexItem)

                    //{<button onClick={()=>props.remove(props.business.id)}>Remove</button>}