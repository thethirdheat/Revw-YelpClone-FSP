import React from 'react'
import SearchBoxContainer from './search/search_container'
import NavBar from './navigation/nav_bar_container'
import GreetingContainer from '../greeting/greeting_container'
import {Link} from 'react-router-dom'

const Nav = () =>(
    <div>
        <div className="NavBar">
            <div className="NavBarTop"  ><Link to ="/"><i className="fas fa-briefcase"></i> SignUp as Business</Link> </div>
            <aside className="NavAside--left"></aside>
            <div className="NavMain">
                <div className="Nav--Searchbox">
                    <SearchBoxContainer/> 
                </div>
                <div className="center">
                    <div className="greeting--container">
                        <div className="Greeting--NameContainer">
                            <a href="https://www.linkedin.com/in/emarson-serrano-289098157/" target="_blank">
                                <i className="fas Greeting--nameItem fa-comment-alt"></i>
                            </a>

                            <a href="https://github.com/thethirdheat" target="_blank">
                                <i className="fas Greeting--nameItem fa-bell"></i>
                            </a>

                        </div>

                        <GreetingContainer />

                    </div>
                </div>


            </div>
            <aside className="NavAside--right"></aside>
            <div className="NavMain--bottom">
                <NavBar/>
            </div>

        </div>
    </div>
)
export default Nav
