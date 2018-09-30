class Word < ApplicationRecord
  # model association
  belongs_to :game
    # validation
    validates_presence_of :name
    validates_format_of :name, :with => /(.*[A-Z]){3}/i
end
