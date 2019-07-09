import React from 'react'
import PicCard from './picture_card'
const ShowPictures = (props)=>{
    const pictures=props.pictures
    console.log("------------------here",props, pictures)
            //<img src={ pictures[0].pictureUrl? pictures[1] : "https://i.imgur.com/kFUQft9.png"}/>
            const blank = {caption: "", pictureUrl:"https://i.imgur.com/kFUQft9.png" }
    return ( 
    <div className="ShowPictures">
        <div>
            <PicCard picture = {pictures[1] ? pictures[1]: blank}/>
        </div>
        <div>
            <PicCard picture = {pictures[0] ? pictures[0]: blank}/>
        </div>
        <div>
            <PicCard picture = {pictures[2] ? pictures[2]: blank}/>
        </div>

    </div>
)}
export default ShowPictures
//        <div>
//            <img src={ pictures[0]? pictures[0].pictureUrl :"https://i.imgur.com/kFUQft9.png"}/>
//        </div>
//        <div>
//            <img src={ pictures[2]? pictures[2].pictureUrl :"https://i.imgur.com/kFUQft9.png"}/>
//        </div>
//        <div>
//            <img src={ picture? pictures[0].pictureUrl :"https://i.imgur.com/kFUQft9.png"}/>
//        </div>
//
//        <div>
//            <img src={ picture? pictures[2].pictureUrl :"https://i.imgur.com/kFUQft9.png"}/>
//        </div>