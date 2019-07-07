import React from 'react'

const IndexItem =(props)=>{
    return (
    <div>
        <br/>
        <p> Business Name:{props.business.business_name} </p>
        <p>Description: {props.business.description}</p> 
        <button onClick={()=>props.remove(props.business.id)}>DElete</button>
    </div>)

}
export default IndexItem 