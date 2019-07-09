import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = (props)=>(
    <div className="NavBar--OuterContainer">
    <div className="NavbarBottom">

    <aside className="Navbar--Bot__Left"></aside>
    <div className="Navbar--Bot__Main">
        <div className="Navbar--Bot__Container">
            <div className="Navbar--Bot__button Button--End"> <i className="fas fa-utensils"></i>Restaurants</div>
            <div className="Navbar--Bot__button Button--Mid__Right"> <i className="fas fa-home"></i>Home Services</div>
            <div className="Navbar--Bot__button Button--Mid__Left"><i className="fas fa-car-alt"></i>Auto Services</div> 
            <div className="Navbar--Bot__button Button--End"> <i className="fas  fa-glass-martini-alt "></i>Night Life</div>


            <div className="Navbar--Bot__button NavBar--Bot__Link" ><Link to ='/biz/new'><i className="fas fa-store"></i> Create a Business</Link> </div>


        </div>
    </div>
    <aside className="Navbar--Bot__Rigth"></aside>

    </div>
    </div>
)
export default NavBar