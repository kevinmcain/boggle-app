class Game < ApplicationRecord
  # model association
  has_many :words, dependent: :destroy

  # validations
  validates_presence_of :json_data, :game_hash
end
