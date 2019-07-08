import React from 'react'
import {Link} from 'react-router-dom';
import ShowInfo from './info/show_info'
import ShowMap from './directions/show_map'
import ShowLinks from './links/show_links'

class DetailBusiness extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.bizId);
    }

//    componentDidUpdate(prevProps) {
//        if (prevProps.match.params.bizId !== this.props.match.params.bizId) {
//            this.props.fetchBusiness(this.props.match.params.bizId);
//        }
//    }
    //deleteBizPicture
    //business
        //this.props.signIn({user: facebook}).then(()=>this.props.history.push('/'), ()=>{
    render(){
        //console.log(this.props,"i'm tyring to fin dthe id")
        const { business } = this.props;
        if (!business || !business.pictures) return null;
        //console.log(business,'this is biz')
        const pictures = Object.values(business.pictures).map((pic)=><div key={`${pic.business_id}${pic.id}`}><img  src={pic.pictureUrl}/><button onClick={()=>this.props.deleteBizPicture(pic.id)}>DELETE</button><br/></div>)
        return(
            <div>
                <ShowInfo business={business}/>
                <ShowMap business={business}/>
                <ShowLinks business={business}/>
                <img src={business.photoUrl}/>
                <br/>
                <div onClick={()=>this.props.history.push(`/biz/${business.id}/pic`)}>THIS IS A BUTTON!!</div>
                {pictures}
                THIISS IS THE SHOW Page
            </div>
        )
    }

}

export default DetailBusiness