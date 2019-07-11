import React from 'react'


class ReviewItem extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        const {props,review}=this.props

        return(
            <div>
                <button onClick={()=>console.log(props)}>this is  review item</button>
                <div className="RevItem--RightSide"> 
                    <img className="Greeting-Img" src="https://i.imgur.com/S5cgOk5.png"></img>
                    {review.username}
                 </div>
                 <div className="RevItem--LeftSide">
                     {review.body}

                 </div>

            </div>
        )


    }
}
export default ReviewItem