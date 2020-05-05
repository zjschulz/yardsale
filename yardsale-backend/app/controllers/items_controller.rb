class ItemsController < ApplicationController
    
    def index
        render :json => Item.all
    end

    def destroy
        Item.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record deleted"}
    end

end