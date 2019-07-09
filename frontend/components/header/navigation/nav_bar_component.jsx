import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = (props)=>(
    <div>
    <div className="NavbarBottom">

    <aside className="Navbar--Bot__Left"></aside>
    <div className="Navbar--Bot__Main">
        <div className="Navbar--Bot__Container">
            <div className="Navbar--Bot__button"> <i className="fas fa-utensils"></i>Restaurants</div>
            <div className="Navbar--Bot__button"> <i className="fas fa-home"></i>Home Services</div>
            <div className="Navbar--Bot__button"><i className="fas fa-car-alt"></i>Auto Services</div> 
            <div className="Navbar--Bot__button"> <i className="fas  fa-glass-martini-alt "></i>Night Life</div>


            <div className="Navbar--Bot__button"><Link to ='/biz/new'><i className="fas fa-store"></i> Create a Business</Link> </div>


        </div>
    </div>
    <aside className="Navbar--Bot__Rigth"></aside>

    </div>
    </div>
)
export default NavBar