class Word < ApplicationRecord
  # model association
  belongs_to :game
    # validation
    validates_presence_of :name
end
