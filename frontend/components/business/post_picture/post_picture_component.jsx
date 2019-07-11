import React from 'react'
import {connect} from 'react-redux'
import {createBizPicture} from '../../../actions/business_actions'
import { withRouter } from 'react-router-dom';

const mstp = (state,ownProps) =>{
    //business: state.entities.businesses[ownProps.match.params.bizId]
    return { form:{currentUser: state.session.id,
        business_id: ownProps.match.params.bizId ,
        caption: "",
        pictureFile: null}
    }
}
const mdtp = dispatch =>({
    createBizPicture: (formData)=>dispatch(createBizPicture(formData))
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
        //console.log(this.state)
        const formData = new FormData()

        if(this.state.pictureFile){
            formData.append('biz_photo[picture]', this.state.pictureFile) 
        }
        formData.append('biz_photo[user_id]',this.state.currentUser)
        formData.append('biz_photo[business_id]',this.state.business_id)
        formData.append('biz_photo[caption]',this.state.caption)

        //console.log(formData)
        this.props.createBizPicture(formData).then(
            ((res)=>this.props.history.push('/'))
        )
    }

    handleFile(e){
        this.setState({pictureFile: e.currentTarget.files[0]})

    }

    render(){
        return (
            <div>
                this is a  form to submit pictures!
                <form onSubmit={this.handleSumbit}>

                    <label> 
                        <input onChange={this.handleFile} type="file"/>
                    </label>

                    <textarea onChange={this.update("caption")} value={this.state.caption}/>

                    <input type="submit" value="submit"/>
                </form>

            </div>
        )
    }
}

export default withRouter(connect(mstp,mdtp)(UpLoadPicture))