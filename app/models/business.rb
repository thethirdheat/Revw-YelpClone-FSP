class Business < ApplicationRecord
    #validates :description, :business_name, phone_number, business_type,  presence: true
    #validates :username, uniqueness:true

    has_one_attached :photo

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
