class Api::BusinessesController < ApplicationController
    def index
        @bizs = Business.all
        render  '../views/api/businesses/index'

    end

    def create
        @biz = Business.new()

    end

    def show

    end
    def user_params
        params.require(:business).permit(:description, :business_name, :email)
    end
end
