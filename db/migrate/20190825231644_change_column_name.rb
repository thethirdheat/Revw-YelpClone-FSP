class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
     rename_column :tags, :type, :biz_type
  end
end
