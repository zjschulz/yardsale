class ItemsController < ApplicationController
    
    def index
        render :json => Item.all
    end

    def destroy
        Item.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record deleted"}
    end

    def create
        user = User.find_by(id: params[:user_id])
        item = Item.create(name: params[:name], description: params[:description], image_url: params[:image_url], price: params[:price], user: user)
        render :json => item
    end

end