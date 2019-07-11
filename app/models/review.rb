class Review < ApplicationRecord
    validates :user_id, :business_id, :rating, :body,  presence: true

    

#    t.integer "user_id", null: false
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User


#    t.integer "business_id", null: false
    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business

end
#    t.integer "user_id", null: false
#    t.integer "business_id", null: false
#    t.integer "rating", null: false
#    t.string "body", null: false


#              api_reviews POST   /api/reviews(.:format)                                 api/reviews#create {:format=>:json}
#               api_review PATCH  /api/reviews/:id(.:format)                             api/reviews#update {:format=>:json}
#                          PUT    /api/reviews/:id(.:format)                             api/reviews#update {:format=>:json}
#                          DELETE /api/reviews/:id(.:format)                             api/reviews#destroy {:format=>:json}

