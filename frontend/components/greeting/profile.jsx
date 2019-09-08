import React from 'react'


const Profile=(props)=>{
    console.log(props)
    const convertLongName=(name)=>{
        console.log(name)
        if(name.length>=15){
            let ret=name.split(" ")
            ret[1]=ret[1][0]+"."
            console.log(ret)
            return ret.join(" ")
        }
        return name
    }
    return(
        <div className="ProfileElement">

            <img className="ProfileElement--Picture" src={ props.user.profilePic||`https://i.imgur.com/S5cgOk5.png`}></img>
            <div className="ProfileElement--User">
                <h3>{convertLongName( props.user.userName)} </h3>
                <p>{props.user.location||"San Francisco, CA "} </p>
                <div className="ProfileElement--Counts">
                    <i className="fas fa-male">&nbsp;</i><i className="fas second fa-male"></i>&nbsp;&nbsp;<span>{props.user.friends||3}</span> 
                    &nbsp;&nbsp;<i className="fas fa-star" aria-hidden="true"></i>&nbsp;{props.user.reviewAmount||0}

                </div>
            </div>

        </div>
    )
}
export default Profile