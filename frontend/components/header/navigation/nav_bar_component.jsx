import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = (props)=>(
    <div>
        <div className=""><Link to ="/">🆁🅴🆅🆆</Link></div>
        <div> <i className="fas fa-utensils"></i>Restaurants</div>
        <div> <i className="fas fa-home"></i>Home Services</div>
        <div><i className="fas fa-car-alt"></i>Auto Services</div> 
        <div> <i className="fas  fa-glass-martini-alt "></i>Night Life</div>


        <div><Link to ='/biz/new'><i className="fas fa-store"></i> Create a Business</Link> </div>

    </div>
)
export default NavBar