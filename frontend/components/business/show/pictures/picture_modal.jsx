
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
        //if(this.props.pictures.length<=1){
            //return ""

        //}
    const convertLongName=(name)=>{
        console.log(name)
        if(name.length>=15){
            let ret=name.split(" ")
            if(ret.length>2){
                ret[1]=ret[1][0]+"."
                return ret.join(" ")
            }
        }
        return name
    }
        console.log(this.props, 'this is the foprpsslsjafkdafs-rops;',this.props.match.params.bizId)
        let date=this.props.picture.created_at
        if(!date){
            return ""
        }
        const convertDate=(date)=>{ 
            //console.log(date)
             date = date.toString()
            date= date.split("T")[0]
            date=date.split('-')
            console.log('this is date',date)
//            let holder = date[0]
//            date[0]=date[2]
//            date[2]=holder
            const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
            date.push(date.shift())
            date=`${months[parseInt (date[0])]} ${date[1]}, ${date[2]}`
          return date
        }
        let userName=convertLongName(this.props.picture.username)
        date=convertDate(date)
        return (<div className="ModalPicture">
            <div className="PictureContainerLeft">
                <div className="PicutureContainer">
                    <img className="" src={ this.props.picture.photoUrl}/> 

                </div>
            </div>
            <div className="PictureContainerRight">


            <div className="ModalProfile">
                    <img className="ModalProfile--Picture" src={ `https://i.imgur.com/S5cgOk5.png`}></img>



                <div className="ModalProfile--Right">
                    <h3>{userName} </h3>
                    <div className="ModalProfile--Counts">
                        <i className="fas fa-male">&nbsp;</i><i className="fas second fa-male"></i>&nbsp;&nbsp;<span>{3}</span> 
                        &nbsp;&nbsp;<i className="fas fa-star" aria-hidden="true"></i>&nbsp;{0}
                    </div>
                    <p className="ModalProfile--Caption"><pre>{this.props.picture.caption}</pre></p>
                    <p className="ModalProfile--Date">{date}</p>

                </div>
            </div>



            </div>

        </div>)


    }

}
export default withRouter(connect(mstp,mdtp)(PictureModal))