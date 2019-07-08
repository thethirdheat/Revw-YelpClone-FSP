import React from 'react'
import SearchBox from './search/search_container'
import NavBar from './navigation/nav_bar_container'
import GreetingContainer from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

const Nav = () =>(
    <div className="NavBar">
        <div className="NavBarTop"  ><Link to ="/"><i className="fas fa-briefcase"></i> SignUp as Business</Link> </div>
        <aside className="NavAside--left"></aside>
        <div className="NavMain">
            <SearchBox/>
            <GreetingContainer />
            <div className="NavMain--bottom">
                <NavBar/>
            </div>>
        </div>
        <aside className="NavAside--right"></aside>

    </div>
)
export default Nav
