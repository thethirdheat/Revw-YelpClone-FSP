import React from 'react'
import { deleteBizPicture}from '../../../../actions/business_actions'
import {connect} from 'react-redux'
//export const deleteBizPicture = (picId) => dispatch =>(
const mdtp=dispatch=>({
    deletePic: (id)=>dispatch(deleteBizPicture(id))
})
const PicCard = (props)=>{
    let hover=false


    console.log(props, "this is pic card props")
    const picId = props.picture.id
    const center= props.center!=undefined? "PicCard__center" : ""
    const delPic = props.deletePic.bind(this)
    return (<div className={`PictureCard ${center}`}>
        <div className="PictureCard--Overlay">
            <img className={` PictureCard--Fit`} src={ props.picture.pictureUrl}/> 
        </div>
    <div onClick={()=>props.deletePic(picId)}>{props.picture.caption}</div>
</div>)}
export default connect(null,mdtp)(PicCard)
///${props.hover}/