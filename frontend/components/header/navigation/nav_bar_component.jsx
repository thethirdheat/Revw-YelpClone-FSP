import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = (props)=>(
    <div className="NavBar--OuterContainer">
    <div className="NavbarBottom">

    <aside className="Navbar--Bot__Left"></aside>
    <div className="Navbar--Bot__Main">
        <div className="Navbar--Bot__Container">
            <div className="Navbar--Bot__button Button--End" ><Link to='/search?search_string=Restaurant'> <i className="fas fa-utensils"></i> &nbsp;&nbsp;Restaurants</Link></div>
            <div className="Navbar--Bot__button Button--Mid__Right"><Link to='/search?search_string=Home%20Service'> <i className="fas fa-home"></i>&nbsp; &nbsp;Home Services</Link></div>
            <div className="Navbar--Bot__button Button--Mid__Left"><Link to='/search?search_string=Auto%20Service'><i className="fas fa-car-alt"></i> &nbsp; &nbsp;Auto Services</Link></div> 
            <div className="Navbar--Bot__button Button--End"> <Link to='/search?search_string=Night%20Life'><i className="fas  fa-glass-martini-alt "></i> &nbsp; &nbsp;Night Life</Link></div>


            <div className="Navbar--Bot__button NavBar--Bot__Link" ><Link to ='/biz/new'><i className="fas fa-store"></i> &nbsp;&nbsp;Create a Business</Link> </div>


        </div>
    </div>
    <aside className="Navbar--Bot__Rigth"></aside>

    </div>
    </div>
)
export default NavBar