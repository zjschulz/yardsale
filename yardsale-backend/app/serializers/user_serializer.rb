class UserSerializer < ActiveModel::Serializer
    attributes :email, :password, :id
    has_many :items
end