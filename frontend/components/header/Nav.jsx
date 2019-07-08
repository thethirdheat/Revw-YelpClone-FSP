import React from 'react'
import SearchBox from './search/search_container'
import NavBar from './navigation/nav_bar_container'
import GreetingContainer from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

const Nav = () =>(
    <div className="NavBar">
        <div className="NavBarTop"  ><Link to ="/"><i className="fas fa-briefcase"></i> SignUp as Business</Link> </div>
        <asid className="NavAside--left"></asid>
        <div className="NavMain">
            <SearchBox/>
            <GreetingContainer />
        <NavBar className="NavMain--bottom"/>
        </div>
        <asid className="NavAside--right"></asid>

    </div>
)
export default Nav
