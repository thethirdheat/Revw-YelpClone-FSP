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
    const business_id = ownProps.match.params.bizId
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
    createBizPicture: (formData)=>dispatch(createBizPicture(formData)),
    fetchBiz: (bizId)=> dispatch(fetchBusiness(bizId)),
})



class UpLoadPicture extends React.Component{
    constructor(props){
        super(props)
        this.state= {...this.props.form}
        this.fileInputRef = React.createRef();

        this.handleSumbit = this.handleSumbit.bind(this)
        this.update=this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleFileDrag = this.handleFileDrag.bind(this)
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
        let curFile=  e.currentTarget.files[0]
        const reader= new FileReader()
        reader.addEventListener("loadend",()=>{
            console.log((reader.result))
            this.setState({pictureFilePreview: reader.result})
            this.setState({pictureFile:curFile})

        },false)
        reader.readAsDataURL(curFile)
        //formView=(
        //    <img src={this.state.pictureFile}/>
        //)

    }
    handleFileDrag(curFile){
        const reader= new FileReader()
        reader.addEventListener("loadend",()=>{
            console.log((reader.result))
            this.setState({pictureFilePreview: reader.result})
            this.setState({pictureFile:curFile})

        },false)
        reader.readAsDataURL(curFile)
        //formView=(
        //    <img src={this.state.pictureFile}/>
        //)

    }
    render(){
                                                //onChange={(file)=>this.setState({pictureFile:file.target.files[0]})}
    let formView=(
        <div>
                <div className="DragAreaContainer">

                    <form   onSubmit={this.handleSumbit}>
                        <Dropzone  noClick={true} onDrop={acceptedFiles => this.handleFileDrag(acceptedFiles[0])}>
                            {({getRootProps, getInputProps}) => (
                                <div>

                                    <div className ="DragArea"{...getRootProps()}>
                                        <div className="DragArea--Desc">
                                            <div className="DragArea--Text">Drag and drop your photos here</div>
                                            <br></br>
                                            <div className="DragArea--ORcontainer">
                                                <div className="ReviewPage--HrLine"><hr></hr></div><span className="DragArea--OR">&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;</span><div className="ReviewPage--HrLine"><hr></hr></div>
                                            </div>
                                            <br></br>
                                            <input
                                                ref={this.fileInputRef}
                                                className="fileInput"
                                                id="file"
                                                type="file"
                                                multiple
                                                onChange={this.handleFile}
                                            />
                                            <div className="DragArea--Submit"><label className="fileInputButton" htmlFor="file">Browse Files</label></div>
                                        </div>
                                    </div>
                                <input {...getInputProps()} />
                                </div>

                            )}
                        </Dropzone>
                    </form>
                </div>
                    <div className="ImageUploadTips">
                        <div className="ImageUploadTips--Card">
                            <img src="https://i.imgur.com/dwA0EHT.png"/>
                            <div className="ImageUploadTips--Text">
                                <p>Refrain from posting </p>
                                <p>shaky or out of focus </p>
                                <p>photos.</p>
                            </div>
                        </div>

                        <div className="ImageUploadTips--Card">
                            <img src="https://i.imgur.com/lc7Y8PX.png"/>
                            <div className="ImageUploadTips--Text">
                                <p>Your photos should be </p>
                                <p>well lit and bright. Don’t</p>
                                <p>be afraid to use the flash</p>
                                <p>on your camera.</p>
                            </div>

                        </div>

                        <div className="ImageUploadTips--Card">
                            <img src="https://i.imgur.com/TK6nvq5.png"/>
                            <div className="ImageUploadTips--Text">
                                <p>If you’re applying filters,</p>
                                <p>don’t overdo them.</p>
                                <p>Subtlety is key.</p>
                            </div>
                        </div>

                        <div className="ImageUploadTips--Card">
                            <img src="https://i.imgur.com/fKbIVbX.png"/>
                            <div className="ImageUploadTips--Text">
                                <p>Lastly, please only post</p>
                                <p>photos of the business.</p>
                            </div>
                        </div>


                    </div>
                    </div>

    )
//
    if(this.state.pictureFilePreview){
//        console.log('thjis is picutre file',this.state.pictureFile)
//        const reader= new FileReader()
//        reader.addEventListener("load",()=>{
//            console.log((reader.result))
//            this.setState({pictureFile: reader.result})
//
//        },false)
//        reader.readAsDataURL(this.state.pictureFile)
        formView=(
            
            <div>
                <p> <i className="fas fa-check "></i> <span className="PictureUpload--Suc">Perfect!</span> Next, describe your photo below.</p>
                <img className="PictureUpload--img" src={this.state.pictureFilePreview}/>
                <button className="PictureUpload--Fin"onClick={this.handleSumbit}>Can we just talk?</button>
            </div>
        )

    }
        console.log(this.props)
        return (
            <div className="PictureSubmit">
                <div className="PictureSubmit--Header">
                    <h1 className="PictureSubmit--BizName"><Link to={`/biz/${this.props.match.params.bizId}`} >{this.props.bizName}</Link>:<span className="PictureSubmit--Title">&nbsp;Add Photos</span>  </h1>
                    <Link to="#"><span className="PictureSubmit--AllPics" >View all photos</span></Link>
                </div>
                {formView}

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