class Business < ApplicationRecord
    validates :description, :business_name, :phone_number, :business_type,  presence: true
    validates :business_name, uniqueness:true
    TYPES = ['Restaurant',  'Home Service', 'Auto Service', 'Night Life'].sort.freeze
    validates :business_type, inclusion: { in: TYPES }

    validate :ensure_photo

    has_one_attached :photo

    has_many :pictures,
        foreign_key: :business_id,
        class_name: :BizPhoto

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review


    has_many :categories,
        foreign_key: :business_id,
        class_name: :Category

    def ensure_photo
        unless self.photo.attached?
            errors[:photo]  << "must be attached"
        end
    end



    #examples from pokemon#
    #validates :attack, :defense, numericality: true
    #params.require(:business).permit(:description, :business_name, :address,:phone_number,:business_type)
    #validates :poke_type, inclusion: { in: TYPES }
    #TYPES = [
    #    'fire',
    #    'electric',
    #    'normal',
    #    'ghost',
    #    'psychic',
    #    'water',
    #    'bug',
    #    'dragon',
    #    'grass',
    #    'fighting',
    #    'ice',
    #    'flying',
    #    'poison',
    #    'ground',
    #    'rock',
    #    'steel'
    #].sort.freeze
end
