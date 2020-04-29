class StaticController < ApplicationController
    
    def home
        render json: { status: "Yay"}
    end
    
end