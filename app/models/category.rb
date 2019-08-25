class Category < ApplicationRecord
#    t.integer "tag_id", null: false
#    t.integer "business_id", null: false

    belongs_to :businesses,
        foreign_key: :business_id,
        class_name: :Business

    belongs_to :tags,
        foreign_key: :tag_id,
        class_name: :Tag


end
