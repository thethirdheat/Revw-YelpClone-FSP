class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :type, null: false


      t.timestamps
    end
  end
end
