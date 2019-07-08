import * as APIUtil from '../util/business_api_util'

export const RECEIVE_ALL_BUSINESSES ="RECIEVE_ALL_BUSINESSES"
export const RECEIVE_SINGLE_BUSINESS ="RECEIVE_SINGLE_BUSINESS"
export const REMOVE_A_BUSINESS ="REMOVE_A_BUSINESS" 
export const BUSINESS_ERROR = "BUSINESS_ERROR"
export const RECEIVE_PICTURE = "RECEIVE_PICTURE"
export const REMOVE_PICTURE = "REMOVE_PICTURE"


//requestAllBusinesses = ()=>({}) 
//createBusiness = (formBiz)=>({}) 
//showBusiness = (bizId)=>({})
//updateBusiness = (formBiz)=>({})
//destroyBusiness = (bizId)=>({})



const receiveAllBusiness = (businesses)=>({
    type: RECEIVE_ALL_BUSINESSES,
    businesses 
})
const reciveSingleBusiness =(business) =>({
    type: RECEIVE_SINGLE_BUSINESS,
    business
})

const removeBusiness =(business) =>({
    type: REMOVE_A_BUSINESS,
    business
}) 

const receiveBusinessError = (errors)=>({
    type: BUSINESS_ERROR,
    errors
})

const receivePicture = ()=>({
    type: RECEIVE_PICTURE,

})


//requestAllBusinesses = ()=>({}) 
export const fetchAllBusinesses = () => dispatch =>(
    APIUtil.requestAllBusinesses()
    .then(
        (businesses =>
            dispatch(receiveAllBusiness(businesses)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)

//createBusiness = (formBiz)=>({}) 
export const makeBusiness = (formBiz) => dispatch =>(
    APIUtil.createBusiness(formBiz)
    .then(
        (business =>
            dispatch(reciveSingleBusiness(business)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)


//showBusiness = (bizId)=>({})
export const fetchBusiness = (bizId) => dispatch =>(
    APIUtil.showBusiness(bizId)
    .then(
        (business =>
            dispatch(reciveSingleBusiness(business)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)
//updateBusiness = (formBiz)=>({})
export const changeBusiness = (formBiz) => dispatch =>(
    APIUtil.updateBusiness(formBiz)
    .then(
        (business =>
            dispatch(reciveSingleBusiness(business)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)
//destroyBusiness = (bizId)=>({})

export const deleteBusiness = (bizId) => dispatch =>(
    APIUtil.destroyBusiness(bizId)
    .then(
        (business =>
            dispatch(removeBusiness(business)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)

export const createBizPicture =(bizPicture) => dispatch =>(
    APIUtil.makeBizPicture(bizPicture)
    .then(
        (biz =>
            dispatch(reciveSingleBusiness(biz)))
        ,( err =>
            dispatch(receiveBusinessError(err.responseJSON)))
    ) 
)
   // receivePicture = ()=>({

//fetchAllBusinesses
//makeBusiness
//fetchBusiness
//changeBusiness
//deleteBusiness