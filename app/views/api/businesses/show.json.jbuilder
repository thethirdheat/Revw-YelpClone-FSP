json.extract! @biz, :id, :business_name, :description, :address, :phone_number, :business_type
json.photoUrl url_for(@biz.photo)