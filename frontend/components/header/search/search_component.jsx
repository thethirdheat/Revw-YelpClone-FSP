import React from 'react'
import {Link} from 'react-router-dom';

class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find:"",
            business_type: "Restaurant"
        }
        this.handSubmit=this.handSubmit.bind(this)

    }
    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev[field]= e.target.value
            return this.setState(prev) 
        } 
    } 
    handSubmit(){
        //this should have the then.histoy.push
        this.props.dispatchSearch(this.state.business_type,this.state.find)

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
                            <option defaultValue value="Restaurant">Restaurant</option>
                            <option value="Home Service">Home Service</option>
                            <option value="Auto Service">Auto Service</option>
                            <option value="Night Life">Night Life</option>
                        </select>
                        <input type="text" placeholder="Burgers" className="Search--bar__input" value={this.state.find} onChange={this.update('find')}/>
                    </div>

                    <div className="Search--Button"  onClick={this.handSubmit}>
                        <i className="fas fa-search Search--Icon"></i> 
                    </div>
                </div>
            </div>

        </div>)
    }

}
export default SearchBox