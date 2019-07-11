import React from 'react'


class ReviewItem extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        const {props,review}=this.props

        return(
            <div className="RevItem">
                <button onClick={()=>console.log(props)}>this is  review item</button>
                 <div className="RevItem--LeftSide">
                    <img className="Rev-Img" src="https://i.imgur.com/S5cgOk5.png"></img>
                    {review.username}
                    
                 </div>

                <div className="RevItem--RightSide"> 
                     {review.body}
                 </div>

            </div>
        )


    }
}
export default ReviewItem