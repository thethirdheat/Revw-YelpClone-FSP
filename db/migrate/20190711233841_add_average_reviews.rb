class AddAverageReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :average_rating, :string
  end
end
