class BizController< ActionController::Base
    def show
        #@biz=Business.first
        @biz = Business.find(params[:id])
        render :show
    end
end
