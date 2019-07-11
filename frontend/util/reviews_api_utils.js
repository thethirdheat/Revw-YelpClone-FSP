
//              api_reviews POST   /api/reviews(.:format)                                 api/reviews#create {:format=>:json}
//               api_review PATCH  /api/reviews/:id(.:format)                             api/reviews#update {:format=>:json}
//                          DELETE /api/reviews/:id(.:format)                             api/reviews#destroy {:format=>:json}


//              api_reviews POST   /api/reviews(.:format)                                 api/reviews#create {:format=>:json}
export const sendToCreateReview= (revForm)=>(
    $.ajax({method:'post', url:"/api/reviews", data: revForm})
)

//               api_review PATCH  /api/reviews/:id(.:format)                             api/reviews#update {:format=>:json}
export const sendToUpdateReview= (revForm)=>(
    $.ajax({method:'post', url:`/api/reviews/${revForm.id}`, data:revForm})
)

//                          DELETE /api/reviews/:id(.:format)                             api/reviews#destroy {:format=>:json}
export const sendToDeleteReview= (revId)=>(
    $.ajax({method:'post', url:`/api/reviews/${revId}`, data:revForm})
)