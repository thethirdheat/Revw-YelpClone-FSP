json.extract! @pic, :user_id, :business_id , :caption
json.photoUrl url_for(@pic.picture)
json.extract! @user, :username