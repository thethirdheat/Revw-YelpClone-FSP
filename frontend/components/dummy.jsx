import React from 'react'
import IndexContainer from './business/index/index_container'
import {Switch } from 'react-router-dom'; 
import {  ProtectedRoute } from '../util/route_util';
import CreateBusinessContainer from './business/create/new_business_container' 
import Nav from './header/Nav'
import DetailBusinessContainer from './business/show/biz_show_container'
import UpLoadPictureContainer from './business/post_picture/post_picture_component'
import SearchIndexContainer from './business/index/search_index'
const Dummy=()=>{
    return(
    <div className ="DummyMain">
        <header className ="MainHeader">
            <Nav />
        </header>
        <aside className="DummyMain--LSideBar"></aside>
        <div className="Switching">

            <Switch>
                <ProtectedRoute  exact path ="/biz/new" component={CreateBusinessContainer}/>
                <ProtectedRoute  path ="/search" component={SearchIndexContainer} />
                <ProtectedRoute exact path="/biz/:bizId" component={DetailBusinessContainer} />
                <ProtectedRoute exact path="/biz/:bizId/pic" component={UpLoadPictureContainer} />
                <ProtectedRoute  exact path ="/" component={IndexContainer}/>
            </Switch>
        </div>
        <aside className="DummyMain--RSideBar"></aside>
        <footer className="DummyMain--Footer">"htis is the foooter"
        <img src="https://i.imgur.com/nnsPfQv.png"/>
        </footer>
    </div>
        )
    }
export default Dummy

