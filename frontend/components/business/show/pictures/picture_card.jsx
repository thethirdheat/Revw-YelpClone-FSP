import React from 'react'
import { deleteBizPicture}from '../../../../actions/business_actions'
import {connect} from 'react-redux'
//export const deleteBizPicture = (picId) => dispatch =>(
const mdtp=dispatch=>({
    deletePic: (id)=>dispatch(deleteBizPicture(id))
})
const PicCard = (props)=>{
    let hover=false


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
    return (<div className={`PictureCard ${center}`}>
        <div className="PictureCard--Overlay">
            <img className={` PictureCard--Fit`} src={ props.picture.pictureUrl}/> 
            {showCaption}
        </div>
</div>)}
export default connect(null,mdtp)(PicCard)
///${props.hover}/