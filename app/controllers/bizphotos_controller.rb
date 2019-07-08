class BizphotosController < ApplicationController
#    t.integer "user_id", null: false
#    t.integer "business_id", null: false
#    t.string "caption"
    def create
        debugger
#        @pic = BizPhoto.new(biz_photo_params)
#        if @pic.save 
#            render '../views/api/bizphotos/show'
#        else
#            render json: @pic.errors.full_messages, status: 422 
#        end
    end

    def destroy
        @pic = BizPhoto.find(params[:id]) 
        render '../views/api/businesses/show' 
    end

#    t.integer "user_id", null: false
#    t.integer "business_id", null: false
#    t.string "caption"
    def biz_photo_params
        params.require(:biz_photo).permit(:user_id, :business_id, :caption, :picture)
    end
end
