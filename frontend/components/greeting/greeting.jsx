import React from 'react';
import { Link } from 'react-router-dom';

const Greeting =(props)=>{
    /* note tahte its porops.history.push to chagne the page basically nooooo match lul*/
    const onSend = (event)=>( 
        props.logout()//.then(res=>props.history.push('/wtfitsowrking??'))
    )

                    /*<h2 className="greeting_username">Hi, {props.currentUser.username}!</h2> */
/*className="Nav--Greeting"*/
    const withUser =()=>(
        <div className="center">
            <div className="greeting--container"> 


                <div className="Greeting--NameContainer">
                </div>
                <div className="Greeting--Logout" onClick={onSend}>Log<br/>Out</div >
                <img className="Greeting-Img" src="https://i.imgur.com/S5cgOk5.png"/>
            </div>
        </div> 
    )

    const noUser =()=>(
        <nav>
            <Link to ="users/new">Sign Up</Link>
            <Link to ="/login">Sign In</Link> 
        </nav> 
    )
    return props.currentUser? withUser() : noUser()
}

export default Greeting;
