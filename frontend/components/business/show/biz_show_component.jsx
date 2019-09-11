import React from 'react'
import {Link} from 'react-router-dom';
import ShowInfo from './info/show_info'
import ShowMap from './directions/show_map'
import ShowLinks from './links/show_links'
import ShowPictures from './pictures/show_pictures'
import ReviewsListContainer from '../../review/show/show_review_container'


class DetailBusiness extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.bizId);
        window.scrollTo(0, 0);
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
        if (!business ) return null;
        /*console.log(business,'this is biz')*/
        //const pictures = Object.values(business.pictures).map((pic)=><div key={`${pic.business_id}${pic.id}`}><img  src={pic.pictureUrl}/><button onClick={()=>this.props.deleteBizPicture(pic.id)}>DELETE</button><br/></div>)
        //console.log("this is biz",business)
        //pictures = business.pictures.values
        let pictureComponent
         if (business.pictures){
            const pictures =Object.values(business.pictures)
            pictureComponent=<ShowPictures pictures={pictures}/>
        }else{
            let emptyAr=[false,false,false]
            pictureComponent=<ShowPictures  pictures={emptyAr}/>
        } 


        return(
            <div className = "ShowPage">
                <div className="ShowBackground"></div>
                <div className="Show--Top">
                    <ShowInfo business={business}/>
                    <ShowLinks business={business}/> 
                </div>
                <div className="Show--Bottom">
                    <ShowMap business={business}/>
                    {pictureComponent}
                </div>
                <ReviewsListContainer business={business} reviews={this.props.reviews }/>
            </div>
        )
    }

}

export default DetailBusiness