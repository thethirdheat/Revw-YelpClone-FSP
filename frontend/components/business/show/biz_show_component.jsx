import React from 'react'

class DetailBusiness extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        console.log(props, 'this iin detail')
    }

                //<img src={this.props.bussiness.photoUrl}/>
    render(){
        console.log(this.props,'this is props')
        return(
            <div>
                THIISS IS THE SHOW Page
            </div>
        )
    }

}

export default DetailBusiness