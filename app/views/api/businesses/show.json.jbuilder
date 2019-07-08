json.extract! @biz, :id, :business_name, :description, :address, :phone_number, :business_type, :lat, :long, :price
json.photoUrl url_for(@biz.photo)


json.pictures do
  @biz.pictures.each do |item|
    json.set! item.id do
      json.extract! item, :user_id, :business_id, :caption, :id
      json.pictureUrl url_for(item.picture)
    end
  end
end