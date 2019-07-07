import React from 'react'

const BizForm =(props)=>(
    <div>
        <form onSubmit={props.send}>
            <label>Business Name
                <input onChange={props.change('business_name')} type="text" value={props.business.business_name}/> 
            </label>
            <br/>

            <label>Description
                <textarea onChange={props.change('description')} value={props.business.description}></textarea>
            </label>
            <br/>


            <label>Address
                <input onChange={props.change('address')} type="text" value={props.business.address}/> 
            </label>
            <br/>

            <label>Phone Number
                <input onChange={props.change('phone_number')} type="text" value={props.business.phone_number}/> 
            </label>

            <label> Price
                <input onChange={props.change('price')} type="text" value={props.business.price}/> 
            </label>

            <label>Latitude
                <input onChange={props.change('lat')} type="text" value={props.business.lat}/> 
            </label>

            <label>Longitude
                <input onChange={props.change('long')} type="text" value={props.business.long}/> 
            </label>

            <br/>
            <select value={props.business_type} onChange={props.change('business_type')}>
                <option defaultValue value="Restaurants">Restaurants</option>
                <option value="Home Service">Home Service</option>
                <option value="Auto Service">Auto Service</option>
                <option value="Night Life">Night Life</option>
            </select>
            <br/>
            <input onChange={props.dealWithFile} type="file"/>
            <br/>


            <input type="submit" value="submit"/>
        </form>
    </div>
)
export default BizForm
//            business_type: "",
