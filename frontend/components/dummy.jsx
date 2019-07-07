import React from 'react'
import IndexContainer from './business/index/index_container'
import {Switch } from 'react-router-dom'; 
import {  ProtectedRoute } from '../util/route_util';
import CreateBusinessContainer from './business/create/new_business_container' 
import Nav from './header/Nav'

const Dummy=()=>{
    return(
    <div>
        Look at Me!
        header goes here?
        <header>
            <div className="fuck">this is a div</div>
            <Nav />
            before index
        </header>
        <Switch>
            <ProtectedRoute  exact path ="/biz/new" component={CreateBusinessContainer}/>
            <ProtectedRoute  path ="/" component={IndexContainer}/>
        </Switch>
        rest of stuff
    </div>
        )
    }
export default Dummy

