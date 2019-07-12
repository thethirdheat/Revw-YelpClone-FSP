class Api::ReviewsController < ApplicationController
#              api_reviews POST   /api/reviews(.:format)                                 api/reviews#create {:format=>:json}
#               api_review PATCH  /api/reviews/:id(.:format)                             api/reviews#update {:format=>:json}
#                          DELETE /api/reviews/:id(.:format)                             api/reviews#destroy {:format=>:json}


    def create
        @rev= Review.new(review_params)
        if @rev.save
            @biz=Business.find(@rev.business_id)
            #render '../views/api/businesses/show'
            render '../views/api/reviews/show' 
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @rev= Review.find(params[:id])
        if @rev.user_id ==current_user.id 
            if @rev.update_attributes(review_params)
                @biz=Business.find(@rev.business_id)
                rate=Business.rating
                @biz.update_attributes
                #render '../views/api/businesses/show'
                render '../views/api/reviews/show' 
            else
                render json: @review.errors.full_messages, status: 422
            end
        else
            render json: ["You may only update your own reviews"], status: 401
        end 
    end

    def destroy
        @rev= Review.find(params[:id])
        @biz=Business.find(@rev.business_id)
        if @rev.user_id ==current_user.id 
            if @rev.destroy
                render '../views/api/businesses/show'
                #render '../views/api/reviews/show' 
            else
                render json: @review.errors.full_messages, status: 422
            end
        else
            render json: ["You may only update your own reviews"], status: 401
        end 
    end

    def review_params
        params.require(:review).permit(:user_id, :business_id,:rating, :body)
    end



end

#    t.integer "user_id", null: false
#    t.integer "business_id", null: false
#    t.integer "rating", null: false
#    t.string "body", null: false