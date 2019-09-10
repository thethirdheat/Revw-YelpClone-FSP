
export const requestPic= (picId)=>(
    $.ajax({method:'get', url:`/api/biz_photos/${picId}`})
)