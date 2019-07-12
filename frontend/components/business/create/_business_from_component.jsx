import React from 'react'

const BizForm =(props)=>(
    <div className="BusinessForm">
        <form onSubmit={props.send}>
            <label>Business Name
            </label>
            <br></br>
                <input onChange={props.change('business_name')} type="text" value={props.business.business_name}/> 
            <br/>

            <label>Description
            </label>
            <br/>
                <textarea onChange={props.change('description')} value={props.business.description}></textarea>
            <br/>


            <label>Address
            </label>
            <br/>
            <input onChange={props.change('address')} type="text" value={props.business.address}/> 
            <br/>

            <label>Phone Number
            </label>
            <br/>
            <input onChange={props.change('phone_number')} type="text" value={props.business.phone_number}/> 
            <br/>

            <label> Price
            </label>
            <br/>
            <input onChange={props.change('price')} type="text" value={props.business.price}/> 
            <br/>

            <label>Latitude
            </label>
            <br/>
            <input onChange={props.change('lat')} type="text" value={props.business.lat}/> 
            <br/>

            <label>Longitude
            </label>
            <br/>
            <input onChange={props.change('long')} type="text" value={props.business.long}/> 
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
