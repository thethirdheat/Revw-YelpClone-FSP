import React from 'react'

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
    render(){
        const { business } = this.props;
        if (!business) return null;
        return(
            <div>
                <img src={business.photoUrl}/>
                <br/>
                THIISS IS THE SHOW Page
            </div>
        )
    }

}

export default DetailBusiness