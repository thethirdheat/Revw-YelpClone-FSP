class Api::BusinessesController < ApplicationController
    def index
        @bizs = Business.all
        render  '../views/api/businesses/index' 
    end 


    def create
        @biz = Business.new(business_params)
        if @biz.save
            render '../views/api/businesses/show'
        else
            render json: @biz.errors.full_messages, status: 422
        end 
    end


    def update
        @biz = Business.find(param[:id])
        if @biz
            render '../views/api/businesses/show'
        else
            render json: @user.errors.full_messages, status: 422
        end 
    end


    def show 
        @biz = Business.find(params[:id])
        render '../views/api/businesses/show' 
    end


    def destroy
        # make sure its the current users restaurants and dedete it if it is check this first
        #@biz= User.find(current_user).business
        @biz = Business.find(params[:id])
        if @biz 
            
            @biz.destroy
            #render json: ["this is destory route"]
            render  '../views/api/businesses/show'
        else 
            render json: ["You must bet the ownder to delete it"], status: 404
        end
    end





    def business_params
        params.require(:business).permit(:description, :business_name, :address,:phone_number,:business_type,:photo, :price, :lat, :long)
    end
end

#    t.string "business_name", null: false
#    t.datetime "updated_at", null: false
#    t.string "description"
#    t.string "address"
#    t.string "phone_number"
#    t.string "business_type"


#                   Prefix Verb   URI Pattern                                                                              Controller#Action
#                      biz GET    /biz/:id(.:format)                                                                       biz#show
#                     root GET    /                                                                                        static_pages#root
#                api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                          POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#           api_businesses GET    /api/businesses(.:format)                                                                api/businesses#index {:format=>:json}
#                          POST   /api/businesses(.:format)                                                                api/businesses#create {:format=>:json}
#             api_business GET    /api/businesses/:id(.:format)                                                            api/businesses#show {:format=>:json}
#                          PATCH  /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#                          PUT    /api/businesses/:id(.:format)                                                            api/businesses#update {:format=>:json}
#                          DELETE /api/businesses/:id(.:format)                                                            api/businesses#destroy {:format=>:json}
#       rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
#rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#       rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
#update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#     rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create
#