//api_businesses GET    /api/businesses(.:format)                    api/businesses#index {:format=>:json}
//               POST   /api/businesses(.:format)                    api/businesses#create {:format=>:json}
//  api_business GET    /api/businesses/:id(.:format)                api/businesses#show {:format=>:json}
//               PATCH  /api/businesses/:id(.:format)                api/businesses#update {:format=>:json}
//               DELETE /api/businesses/:id(.:format)                api/businesses#destroy {:format=>:json}


//api_businesses GET    /api/businesses(.:format)                    api/businesses#index {:format=>:json}
export const requestAllBusinesses = ()=>(
    $.ajax({method:'get', url:"/api/businesses"})
)


//               POST   /api/businesses(.:format)                    api/businesses#create {:format=>:json}

export const createBusiness = (formBiz)=>(
    $.ajax({method:'post', url:"/api/businesses", data:formBiz})
)

//  api_business GET    /api/businesses/:id(.:format)                api/businesses#show {:format=>:json}
export const showBusiness = (bizId)=>(
    $.ajax({method:'get', url:`/api/businesses/${bizId}`})
)

//               PATCH  /api/businesses/:id(.:format)                api/businesses#update {:format=>:json}
export const updateBusiness = (formBiz)=>(
    $.ajax({method:'patch', url:`/api/businesses/${formBiz.id}`, data:formBiz})
)


//               DELETE /api/businesses/:id(.:format)                api/businesses#destroy {:format=>:json}
export const destroyBusiness = (bizId)=>(
    $.ajax({method:'delete', url:`/api/businesses/${bizId}`})
)