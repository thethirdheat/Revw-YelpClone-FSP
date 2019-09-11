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
    $.ajax({method:'post', url:"/api/businesses", data:formBiz, contentType:false, processData:false})
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










////// this is picutres ////////////////////

//api_biz_photo_index POST   /api/biz_photo(.:format)              api/biz_photo#create {:format=>:json}
//api_biz_photo DELETE /api/biz_photo/:id(.:format)               api/biz_photo#destroy {:format=>:json}


//createBizPicture
//destroyBizPicture

//api_biz_photo_index POST   /api/biz_photo(.:format)              api/biz_photo#create {:format=>:json}
export const makeBizPicture = (formBiz)=>(
    $.ajax({method:'post', url:"/api/biz_photos", data:formBiz, contentType:false, processData:false})
)

//api_biz_photo DELETE /api/biz_photo/:id(.:format)               api/biz_photo#destroy {:format=>:json}
export const destroyBizPicture = (bizId)=>(
    $.ajax({method:'delete', url:`/api/biz_photos/${bizId}`})
)


export const requestForBusiness = (searchString, searchBizTitle="")=>{
    let urlString=`/api/search?search_string=${searchString}`
    if(searchBizTitle){
        urlString=`/api/search?search_string=${searchString}&find_desc=${searchBizTitle}`
        //console.log(urlString,'llllllllllllllllllllllllllllllllllllllllllllllllllllthis is url string lllllllllllllllllllllllllllllllllllllll')
    }


    return (
    $.ajax({method:'get', url:urlString})
)}