class Tag < ApplicationRecord
    #t.string "biz_type", null: false
    has_many :categories,
        foreign_key: :tag_id,
        class_name: :Category
    
    has_many :businesses,
        source: :businesses,
        through: :categories
end
