import React from 'react';
import { Link } from 'react-router-dom';

import Profile from './profile'

import {connect} from 'react-redux'
import {receiveModalOn} from '../../actions/ui_actions'
const mdtp = (dispatch) =>({
    sendComponent: (comp,opacity)=>dispatch(receiveModalOn(comp,opacity))

})
const mstp = (state)=>{
    //console.log(state)
    let user=state.entities.user[Object.keys(state.entities.user)[0]].username

    return{
    user
}}




class Greeting extends React.Component{
    constructor(props){
        super(props)
        //this.onSend=this.onSend.bind(this)
        this.state={
            profileOn:false
        }
    }
//    onSend(){ 
//        this.props.logout()//.then(res=>props.history.push('/wtfitsowrking??'))
//    }
//

    render(){
    /* note tahte its porops.history.push to chagne the page basically nooooo match lul*/

                    /*<h2 className="greeting_username">Hi, {props.currentUser.username}!</h2> */
/*className="Nav--Greeting"*/

            //<div className="GreetingContainer">
                //</div >
        //console.log(this.props.user)
        let profile=(<div className="Greeting--Modal">

                <div className="Greeting--Profile" >
                    <div className="Greeting--ProfileElement">
                        <Profile user={{userName:this.props.user,location: ""}}/>

                    </div>
                    <div className="Greeting--ProfileLogout">
                        <div className="LogOutLink" onClick={()=>this.props.logout()} >
                            <Link to="/login"> Log Out</Link>

                        </div>

                    </div>
                <div className="Pointerblock"></div>
            </div>
            </div>)

    if(this.state.profileOn&& this.props.currentUser){
        this.props.sendComponent(profile,0)
        //this.props.sendComponent(profile)

    }
//                <div className="Greeting--NameContainer">
//                    wut
//                </div>
 
                //<div className="Greeting--ProfileContainer" onClick={()=>this.setState({profileOn:!this.state.profileOn})}></div>
    const withUser =()=>(
                <div className="Greeting--ProfileContainer" onClick={()=>this.props.sendComponent(profile,0)}>
                    <img className="Greeting-Img" src="https://i.imgur.com/S5cgOk5.png"/>
                    <div className="Greeting--ProfileToggle" ><i className="fas fa-sort-down"></i></div >
                </div>
    )

    const noUser =()=>(
        <nav>
            <Link to ="users/new">Sign Up</Link>
            <Link to ="/login">Sign In</Link> 
        </nav> 
    )
    return this.props.currentUser? withUser() : noUser()
}
}

export default connect(mstp,mdtp)(Greeting);
