import React from 'react'
import SearchBox from './search/search_container'
import NavBar from './navigation/nav_bar_container'
import GreetingContainer from '../greeting/greeting_container'

const Nav = () =>(
    <div>
        <SearchBox/>
        <NavBar/>
        <GreetingContainer />

    </div>
)
export default Nav
