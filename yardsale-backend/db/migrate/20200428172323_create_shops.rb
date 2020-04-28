class CreateShops < ActiveRecord::Migration[6.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :user_id
      t.string :dog_id

      t.timestamps
    end
  end
end
