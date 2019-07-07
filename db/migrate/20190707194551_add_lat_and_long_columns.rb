class AddLatAndLongColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :float
    add_column :businesses, :long, :float
    add_column :businesses, :price, :string

  end
end
