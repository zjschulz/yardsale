class ItemsController < ApplicationController
    
    def index
        render :json => Item.all
    end

    def destroy
        Item.find(params[:id]).destroy
        redirect_to '/items'
    end

end