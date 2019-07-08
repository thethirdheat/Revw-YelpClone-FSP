import React from 'react'
import {connect} from 'react-redux'

const mstp = (state,ownPros) =>{
    //business: state.entities.businesses[ownProps.match.params.bizId]
    return { form:{currentUser: state.session.id,
        business_id: ownProps.match.params.bizId ,
        caption: "",
        pictureFile: null}
    }
}
const mdtp = dispatch =>({

})



class UpLoadPicture extends React.Component{
    constructor(props){
        super(props)
        this.state= this.props.form

        this.handleSumbit = this.handleSumbit.bind(this)
        this.update=this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev[field]= e.target.value
            return this.setState(prev) 
        } 
    } 

    handleSumbit(e){
        //params.require(:biz_photo).permit(:user_id, :business_id, :caption)
        e.preventDefault();
        const formData = new FormData()
        if(this.state.photoFile){
            formData.append('biz_photo[picture]', this.state.form.pictureFile) 
        }
        formData.append('biz_photo[user_id]',this.state.form.currentUser)
        formData.append('biz_photo[business_id]',this.state.form.business_id)
        formData.append('biz_photo[caption]',this.state.form.caption)

        console.log(formData)
        this.props.createBusiness(formData).then(
            ((res)=>this.props.history.push('/'))
        )
    }
}

export default withRouter(connect(mstp,mdtp)(UpLoadPictureContainer))