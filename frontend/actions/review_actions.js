import * as APIUtil from '../util/reviews_api_utils'

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERROR = "RECEIVE_REVIEW_ERROR"

const receiveReview = (review)=>({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (review)=>({
    type: REMOVE_REVIEW,
    reviewId: review.id 
})

const receiveReviewError = (error)=>({
    type: RECEIVE_REVIEW_ERROR,
    error
})

//sendToCreateReview
export const createReview = (formRev)=>dispatch=>(
    APIUtil.sendToCreateReview(formRev)
        .then(
            (review=>dispatch(receiveReview(review)))
            ,(err=>dispatch(receiveReviewError(err)))
        )
)

//sendToDeleteReview
export const deleteReview = (revId)=>dispatch=>(
    APIUtil.sendToDeleteReview(revId)
        .then(
            (review=>dispatch(receiveReview(review)))
            ,(err=>dispatch(receiveReviewError(err)))
        )
)

//sendToUpdateReview
export const patchReview = (formRev)=>dispatch=>(
    APIUtil.sendToUpdateReview(formRev)
        .then(
            (review=>dispatch(receiveReview(review)))
            ,(err=>dispatch(receiveReviewError(err)))
        )
)