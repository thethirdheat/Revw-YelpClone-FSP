import React from 'react'

class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find:"",
            business_type: "Restaurants"
        }

    }
    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev[field]= e.target.value
            return this.setState(prev) 
        } 
    } 


    render(){
        return(
        <div>
            <label> Type
                <select value={this.state.business_type} onChange={this.update('business_type')}>
                    <option defaultValue value="Restaurants">Restaurants</option>
                    <option value="Home Service">Home Service</option>
                    <option value="Auto Service">Auto Service</option>
                    <option value="Night Life">Night Life</option>
                </select>

            </label>
            <label> Type 
                <input type="text" value={this.state.find} onChange={this.update('find')}/>
            </label> 

            <button onClick={()=>console.log("this should submit the form ",this.state)}>
                <i className="fas fa-search"></i> 
            </button>
                

        </div>)
    }

}
export default SearchBox