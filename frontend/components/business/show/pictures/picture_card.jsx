import React from 'react'
const PicCard = (props)=>{
    console.log(props)
    return (<div>
    <img src={ props.picture.pictureUrl}/>
    <div>{props.picture.caption}</div>
</div>)}
export default PicCard
//