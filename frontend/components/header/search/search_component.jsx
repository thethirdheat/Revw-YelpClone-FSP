import React from 'react'
import {Link} from 'react-router-dom';

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
        <div className="Search">
            <div className="search--container">
                <div className="Search--line"></div>

            
                <div className="Search--Logo"><Link to ="/">🆁🅴🆅🆆</Link></div>
                <div className="Search--Bar">
                    <div className="Search--Bar__bar">
                        <span className="Search--Find">Find</span>
                        <select className="Search--bar__select" value={this.state.business_type} onChange={this.update('business_type')}>
                            <option defaultValue value="Restaurants">Restaurants</option>
                            <option value="Home Service">Home Service</option>
                            <option value="Auto Service">Auto Service</option>
                            <option value="Night Life">Night Life</option>
                        </select>
                        <input type="text" placeholder="Burgers" className="Search--bar__input" value={this.state.find} onChange={this.update('find')}/>
                    </div>

                    <div className="Search--Button"  onClick={()=>console.log("this should submit the form ",this.state)}>
                        <i className="fas fa-search Search--Icon"></i> 
                    </div>
                </div>
            </div>

        </div>)
    }

}
export default SearchBox