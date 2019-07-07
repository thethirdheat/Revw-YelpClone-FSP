class CreateBizPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :biz_photos do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.string :caption

      t.timestamps
    end
    add_index :biz_photos, :user_id
    add_index :biz_photos, :business_id
  end
end
