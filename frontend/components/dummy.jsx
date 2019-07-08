import React from 'react'
import IndexContainer from './business/index/index_container'
import {Switch } from 'react-router-dom'; 
import {  ProtectedRoute } from '../util/route_util';
import CreateBusinessContainer from './business/create/new_business_container' 
import Nav from './header/Nav'
import DetailBusinessContainer from './business/show/biz_show_container'
import UpLoadPictureContainer from './business/post_picture/post_picture_component'
const Dummy=()=>{
    return(
    <div className ="DummyMain">
        Look at Me!
        header goes here?
        <header className ="MainHeader">
            <Nav />
            before index
        </header>
        <aside className="DummyMain--LSideBar"></aside>
        <div className="Switching">
            <Switch>
                <ProtectedRoute  exact path ="/biz/new" component={CreateBusinessContainer}/>
                <ProtectedRoute exact path="/biz/:bizId" component={DetailBusinessContainer} />
                <ProtectedRoute exact path="/biz/:bizId/pic" component={UpLoadPictureContainer} />
                <ProtectedRoute  path ="/" component={IndexContainer}/>
            </Switch>
        </div>
        <aside className="DummyMain--RSideBar"></aside>
        <footer className="DummyMain--Footer"></footer>
        rest of stuff
    </div>
        )
    }
export default Dummy

