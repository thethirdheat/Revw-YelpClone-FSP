import React from 'react';
import { Link } from 'react-router-dom';

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
        let profile=""


    if(this.state.profileOn&& this.props.currentUser){
        profile=(<div className="Greeting--Profile">
            hi bitch hi?
                <div className="" val="onClick={()=>this.props.logout()}">this si the log out buton?</div >
            </div>)

    }

    const withUser =()=>(
        <div className="center">
            <div className="greeting--container"> 


                <div className="Greeting--NameContainer">
                    wut
                </div>
                
                <div className="Greeting--ProfileContainer" onClick={()=>this.setState({profileOn:!this.state.profileOn})}>
                    <img className="Greeting-Img" src="https://i.imgur.com/S5cgOk5.png"/>
                    <div className="Greeting--ProfileToggle" ><i className="fas fa-sort-down"></i></div >
                </div>
                {profile}
            </div>
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

export default Greeting;
