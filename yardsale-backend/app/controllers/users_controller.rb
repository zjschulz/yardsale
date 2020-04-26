class UsersController < ApplicationController
    has_secure_password
    validates :email, presence: true
end
