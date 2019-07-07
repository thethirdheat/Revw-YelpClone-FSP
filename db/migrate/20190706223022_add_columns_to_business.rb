class AddColumnsToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :description, :string
    add_column :businesses, :address, :string
    add_column :businesses, :phone_number, :string
    add_column :businesses, :business_type, :string
  end
end
