class Api::BusinessesController < ApplicationController
    def index
        @bizs = Business.all
        render  '../views/api/businesses/index'

    end

    def create

    end

    def show

    end
end
