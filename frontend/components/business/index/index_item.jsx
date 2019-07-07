import React from 'react'

const IndexItem =(props)=>{
    return (<div>
            <p> Business Name:{props.business.business_name} </p>
            <p>Description: {props.business.description}</p> 
            <br/>


    </div>)

}
export default IndexItem 