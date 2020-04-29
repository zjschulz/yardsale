class ItemSerializer < ActiveModel::Serializer
    attributes :name, :description, :image_url, :price, :user_id
    belongs_to :user
end