import React from 'react'
import PicCard from './picture_card'
class ShowPictures extends React.Component{
    constructor(props){
        super(props)
        this.state={
            first:"",
            second:"hovered",
            third: "" 
        }


    }

    render(){
    const pictures=this.props.pictures
    const blank = {caption: "", pictureUrl:"https://i.imgur.com/yPsQ4pY.png" }
            /*onMouseEnter={this.someHandler}
    onMouseLeave*/
    //console.log(pictures,'------------------------------thsis pic in show_picutres ----------------------------------------------------------------------------')
    return ( 
        <div className="ShowPictures">
            <div className={this.state.first? "hovered":""}  onMouseEnter={()=>this.setState({first:"hovered",second:"",third:""})} onMouseLeave={()=>this.setState({first:"",second:"hovered",third:""})}>
                <PicCard picture = {pictures[1] ? pictures[1]: blank}  hovered={this.state.first}/>
            </div>
            <div className={this.state.second? "hovered":""} onMouseEnter={()=>this.setState({first:"",second:"hovered",third:""})} onMouseLeave={()=>this.setState({first:"",second:"hovered",third:""})}>
                <PicCard picture = {pictures[0] ? pictures[0]: blank} hovered={this.state.second}/>
            </div>
            <div className={this.state.third? "hovered":""} onMouseEnter={()=>this.setState({first:"",second:"",third:"hovered"})} onMouseLeave={()=>this.setState({first:"",second:"hovered",third:""})}>
                <PicCard   picture = {pictures[2] ? pictures[2]: blank}   hovered={this.state.third}/>
            </div>

        </div> 
    )}
}
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