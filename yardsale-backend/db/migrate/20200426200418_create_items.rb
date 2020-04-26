class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :picture
      t.string :price
      t.integer :user_id

      t.timestamps
    end
  end
end
