require 'rails_helper'

RSpec.describe Game, type: :model do
      # Association test
      # ensure Game model has a 1:m relationship with the GameWord model
      it { should have_many(:words).dependent(:destroy) }
      # Validation tests
      # ensure columns title and created_by are present before saving
      it { should validate_presence_of(:json_data) }
      it { should validate_presence_of(:game_hash) }
end
