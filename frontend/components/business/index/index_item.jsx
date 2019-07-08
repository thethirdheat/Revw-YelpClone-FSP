import React from 'react'
import { withRouter } from 'react-router-dom'

const IndexItem =(props)=>{
    console.log(props)
    return (
    <div onClick={()=>props.history.push(`/biz/${props.business.id}`)}>
        <br/>
        <p> Business Name:{props.business.business_name} </p>
        <p>Description: {props.business.description}</p> 
        <p>Address: {props.business.address} </p>
        <p>Phone Number: {props.business.phone_number}</p> 
        <p>Price: {props.business.price}</p> 
        <p>Long: {props.business.long}</p> 
        <p>Lat: {props.business.lat}</p> 
        <img src={props.business.photoUrl}/>

        <button onClick={()=>props.remove(props.business.id)}>DElete</button>
    </div>)

}
export default withRouter(IndexItem)