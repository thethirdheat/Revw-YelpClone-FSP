import React from 'react'
import Stars from '../stars'
import Profile from '../../greeting/profile'

class ReviewItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:""
        }

    }
    componentDidMount(){
        let date = this.props.review.updated_at.toString()
        date= date.split("T")[0]
        date=date.split('-')
        let holder = date[0]
        //date[0]=date[2]
        //date[2]=holder
        date.push(date.shift())
        date=date.join('/')
        this.setState({date})
            //this.setState({date: this.props.review.updated_at.toString().split('T')[0].reverse() })

    }
    render(){
        const {props,review}=this.props
        //const date= review.updated_at.toString().split('T')//[0].reverse()
        let button
        

        return(
            <div className="RevItem">
                <Profile user={{profilePic:false, userName: review.username}}/>
                

                <div className="RevItem--RightSide"> 
                    <div className="ReviewStars ReviewItem">
                        <Stars amount={review.rating}/> <span className="ReviewDate--Reverse" > &nbsp;&nbsp;{this.state.date }</span>
                    </div>

                    <div className="RevItemBody">
                        <p><pre>{review.body}</pre></p>
                    </div>
                </div>

            </div>
        )


    }
}
export default ReviewItem
//                 <div className="RevItem--LeftSide">
//                     <div className="RevUser">
//                         <div className="RevUser--Left">
//
//                            <img className="Rev-Img" src="https://i.imgur.com/S5cgOk5.png"></img>
//                         </div>
//                         <div className="RevUser--Right">
//                            {review.username}
//                         </div>
//                     </div>
//                    
//                 </div>