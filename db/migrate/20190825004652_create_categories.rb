class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|

      t.integer :tag_id, null: false
      t.integer :business_id, null: false

      t.timestamps
    end
    add_index :categories, :tag_id
    add_index :categories, :business_id
  end
end
