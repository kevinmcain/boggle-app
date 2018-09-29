require 'rails_helper'

RSpec.describe Word, type: :model do
    # Association test
    # ensure an game_word record belongs to a single game_matrices record
    it { should belong_to(:game) }
    # Validation test
    # ensure column game_hash is present before saving
    it { should validate_presence_of(:name) }
end
