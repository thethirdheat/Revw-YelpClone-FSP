import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import Index from './business/index/index_component'
import {Switch } from 'react-router-dom'; 
import {  ProtectedRoute } from '../util/route_util';
import CreateBusinessContainer from './business/create/new_business_container' 

const Dummy=()=>{
    return(
    <div>
        Look at Me!
        header goes here?
        <header>
            <div className="fuck">this is a div</div>
            <GreetingContainer />
            before index
        </header>
        <Switch>
            <ProtectedRoute  exact path ="/biz/new" component={CreateBusinessContainer}/>
            <ProtectedRoute  path ="/" component={Index}/>
        </Switch>
        rest of stuff
    </div>
        )
    }
export default Dummy

