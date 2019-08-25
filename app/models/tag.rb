class Tag < ApplicationRecord
    has_many :categories,
        foreign_key: :tag_id,
        class_name: :Category
    
    has_many :businesses,
        source: :businesses,
        through: :categories
end
