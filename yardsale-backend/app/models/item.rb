class Item < ApplicationRecord
    belongs_to :shop
    belongs_to :user, through: :shop
end
