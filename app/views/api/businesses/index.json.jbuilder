

@bizs.each do |biz|
  json.set! biz.id do
    json.extract! biz, :id, :business_name, :description, :address, :phone_number, :business_type, :lat, :long, :price  
    json.photoUrl url_for(biz.photo)
  end
end