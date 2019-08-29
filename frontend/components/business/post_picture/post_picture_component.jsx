import React from 'react'
import {connect} from 'react-redux'
import {createBizPicture} from '../../../actions/business_actions'
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import {fetchBusiness} from '../../../actions/business_actions'

import {Link} from 'react-router-dom';
import{createRef} from 'react';

const dropzoneRef = createRef();
const openDialog = () => {
  // Note that the ref is set async,
  // so it might be null at some point 
  if (dropzoneRef.current) {
    dropzoneRef.current.open()
  }
}

const mstp = (state,ownProps) =>{
    //business: state.entities.businesses[ownProps.match.params.bizId]
    let bizName=""
    if(state.entities.businesses[business_id]){
        bizName=state.entities.businesses[business_id].business_name
    }
    return { form:{currentUser: state.session.id,
        business_id: ownProps.match.params.bizId ,
        caption: "",
        pictureFile: null},
        bizName
    }
}
const mdtp = dispatch =>({
    createBizPicture: (formData)=>dispatch(createBizPicture(formData))
})



class UpLoadPicture extends React.Component{
    constructor(props){
        super(props)
        this.state= {...this.props.form}
        this.fileInputRef = React.createRef();

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
    componentDidMount() {
        this.props.fetchBiz(this.props.match.params.bizId).then(res=>console.log(this.props,"this is from reesponse"));
        //console.log(this.props,'this is props!!!')
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
            ((res)=>this.props.history.push(`/biz/${this.state.business_id}`))
        )
    }

    handleFile(e){
        this.setState({pictureFile: e.currentTarget.files[0]})

    }

    render(){
        console.log(this.props)
        return (
            <div className="PictureSubmit">
                <div className="PictureSubmit--Header">
                    <h1 className="PictureSubmit--BizName">{this.props.bizName}  this is bizname</h1>
                    <Link to="#">View all photos</Link>
                </div>
                <form onSubmit={this.handleSumbit}>
                    <Dropzone  noClick={true} onDrop={acceptedFiles => this.setState({pictureFile:acceptedFiles[0]})}>
                        {({getRootProps, getInputProps}) => (
                            <div>

                                <div className ="DragArea"{...getRootProps()}>
                                    <p>Drag and drop your photos here</p>
                                    <div className="ReviewPage--ORcontainer">
                                        <div className="ReviewPage--HrLine"><hr></hr></div><span>&nbsp;OR&nbsp;</span><div className="ReviewPage--HrLine"><hr></hr></div>
                                    </div>
                                    <input
                                        ref={this.fileInputRef}
                                        className="fileInput"
                                        id="file"
                                        type="file"
                                        multiple
                                        onChange={(file)=>this.setState({pictureFile:file.target.files[0]})}
                                    />
                                    <label className="fileInputButton" htmlFor="file">Browse Files</label>
                                </div>
                            <input {...getInputProps()} />
                            </div>

                        )}
                    </Dropzone>
                    <input type="submit" value="submit"/>
                </form>

            </div>
        )
    }
}

export default withRouter(connect(mstp,mdtp)(UpLoadPicture))
                                    //<input className="green"{...getInputProps()} />
//                <form onSubmit={this.handleSumbit}>
//                    <textarea onChange={this.update("caption")} value={this.state.caption}/>
//                    <br></br>
//
//                    <label> 
//                        <input onChange={this.handleFile} type="file"/>
//                    </label>
//
//
//                    <br></br>
//                    <input type="submit" value="submit"/>
//                </form>