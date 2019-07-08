import React from 'react'
import {Link} from 'react-router-dom';

class DetailBusiness extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.bizId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bizId !== this.props.match.params.bizId) {
            this.props.fetchBusiness(this.props.match.params.bizId);
        }
    }

    //business
        //this.props.signIn({user: facebook}).then(()=>this.props.history.push('/'), ()=>{
    render(){
        console.log(this.props,"i'm tyring to fin dthe id")
        const { business } = this.props;
        if (!business) return null;
        return(
            <div>
                <img src={business.photoUrl}/>
                <br/>
                <div onClick={()=>this.props.history.push(`/biz/${business.id}/pic`)}>THIS IS A BUTTON!!</div>
                THIISS IS THE SHOW Page
            </div>
        )
    }

}

export default DetailBusiness