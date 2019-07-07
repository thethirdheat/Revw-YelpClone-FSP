class BizPhoto < ApplicationRecord
    validates :user_id, :business_id,   presence: true
    has_one_attached :picture
    validate :ensure_photo

    def ensure_photo
        unless self.picture.attached?
            errors[:picture]  << "must be attached"
        end
    end
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :business,
        foreign_key: :business_id,
        class_name: :Business


#    t.integer "user_id", null: false
#    t.integer "business_id", null: false
#    t.string "caption"

end
