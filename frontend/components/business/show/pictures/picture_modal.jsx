
import React from 'react'
import {connect} from 'react-redux'
import {dispatchRequestSinglePicture} from '../../../../actions/pictures_actions'
import { withRouter } from 'react-router-dom';
import Profile from '../../../greeting/profile'


const mstp=(state,ownProps)=>({
    picture: state.entities.pictures

})

const mdtp = (dispatch)=>({
    requestSinglePic: (picId)=>dispatch(dispatchRequestSinglePicture(picId))

})

class PictureModal extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    this.props.requestSinglePic(this.props.id)

    }
    componentWillUnmount(){
        //this.props.history.push(`/biz/${this.props.picture.business_id}`)
        //this.props.history.push(this.props.history.location.pathname)
        this.props.history.push(`/biz/${this.props.bizId}`)

    }




    render(){
    const convertLongName=(name)=>{
        console.log(name)
        if(name.length>=15){
            let ret=name.split(" ")
            if(ret.length>2){
                ret[1]=ret[1][0]+"."
                return ret.join(" ")
            }
            return name
        }
    }
        let userName=this.props.picture.username
        console.log(this.props, 'this is the foprpsslsjafkdafs-rops;',this.props.match.params.bizId)
        return (<div className="ModalPicture">
            <div className="PictureContainerLeft">
                <div className="PicutureContainer">
                    <img className="" src={ this.props.picture.photoUrl}/> 

                </div>
            </div>
            <div className="PictureContainerRight">


            <img className="ProfileElement--Picture" src={ `https://i.imgur.com/S5cgOk5.png`}></img>
                <h3>{userName} </h3>
                <div className="ProfileElement--Counts">
                    <i className="fas fa-male">&nbsp;</i><i className="fas second fa-male"></i>&nbsp;&nbsp;<span>{3}</span> 
                    &nbsp;&nbsp;<i className="fas fa-star" aria-hidden="true"></i>&nbsp;{0}
                </div>



            </div>

        </div>)


    }

}
export default withRouter(connect(mstp,mdtp)(PictureModal))