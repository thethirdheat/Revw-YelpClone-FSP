json.extract! @biz, :id, :business_name, :description, :address, :phone_number, :business_type, :lat, :long, :price
json.photoUrl url_for(@biz.photo)