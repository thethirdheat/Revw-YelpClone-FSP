import React from 'react'
import { deleteBizPicture}from '../../../../actions/business_actions'
import {connect} from 'react-redux'
import PictureModalContainer from './picture_modal'
import { withRouter } from 'react-router-dom';

//export const deleteBizPicture = (picId) => dispatch =>(

    import { receiveModalOn } from '../../../../actions/ui_actions'

const mdtp=dispatch=>({
    deletePic: (id)=>dispatch(deleteBizPicture(id)),
    sendComponent: (comp,opacity)=>dispatch(receiveModalOn(comp,opacity))

})
const PicCard = (props)=>{
    console.log('--------------------------look at me---------------------',props,'this is props before')
    let hover=false
    let sendModal= <PictureModalContainer id={props.picture.id} bizId={props.picture.business_id}/>



    //console.log(props, "this is pic card props")
    const picId = props.picture.id
    const center= props.center!=undefined? "PicCard__center" : "https://i.imgur.com/yPsQ4pY.png"
    const delPic = props.deletePic.bind(this)
    let showCaption 
    const deletePic = props.deletePic.bind(this)
    if(props.hovered!=""){
        showCaption= <div className="ShowPictures--Caption" onClick={()=>/*console.log("pic clickec")*/(delPic(picId))}>{props.picture.caption}</div>
    }else{
        showCaption=""
    }
    const handleClick=(el,amount)=>{
        console.log(props,"this should be the porops")
        //this.props.match.params.bizId
        props.history.push(`/biz/${props.match.params.bizId}/biz_photos/${props.picture.id}`)
        props.sendComponent(el,amount)

    }
    return (<div className={`PictureCard ${center}`} onClick={()=>handleClick(sendModal,.7)}>
        <div className="PictureCard--Overlay">
            <img className={` PictureCard--Fit`} src={ props.picture.pictureUrl}/> 
            {showCaption}
        </div>
</div>)}
export default withRouter(connect(null,mdtp)(PicCard))
///${props.hover}/