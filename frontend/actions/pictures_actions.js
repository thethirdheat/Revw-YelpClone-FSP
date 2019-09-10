
import * as APIUtil from '../util/pictures_util'
export const RECEIVE_SINGLE_PICTURE ="RECEIVE_SINGLE_PICTURE"

 const receiveSinglePicture = (picture)=>({
    type: RECEIVE_SINGLE_PICTURE,
    picture
})

export const dispatchRequestSinglePicture = (picId) => dispatch =>(
    APIUtil.requestPic(picId)
    .then(
        (pic =>
            dispatch(receiveSinglePicture(pic)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)