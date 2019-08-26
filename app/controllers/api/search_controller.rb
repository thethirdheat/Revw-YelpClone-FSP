class Api::SearchController < ApplicationController
    def index
        out = params[:search_string]
        render plain: out
    end


end
