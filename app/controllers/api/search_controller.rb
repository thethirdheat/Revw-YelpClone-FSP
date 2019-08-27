class Api::SearchController < ApplicationController
    def index
        out = params[:search_string]
        #out = Parameters[:search_string]
#        p params["search_string"]
        p "--------------------------look at me ------------------------"
        p params
#
        p out
        #render plain: out
        @bizs=Tag.find_by({biz_type: out}).businesses

        render  '../views/api/businesses/index' 
    end


end
