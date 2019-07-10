import React from 'react'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const ShowLinks =(props)=>{
    const {business}=props
    console.log(props,'this is in showInnfo1')
return(
<div className="ShowLinks">
    <div className="ShowLinks--Grid">
        <div className="ShowLinks--Review" onClick={()=>props.history.push(`/biz/${business.id}/review`)}> <i className="fas fa-star"></i> &nbsp;&nbsp;Write a Review</div>
        <div className="ShowLinks--Picture" onClick={()=>props.history.push(`/biz/${business.id}/pic`)}> <i className="fas fa-camera"></i>&nbsp;&nbsp; Add Photo</div> 
    </div>
</div>)}

export default withRouter(ShowLinks)