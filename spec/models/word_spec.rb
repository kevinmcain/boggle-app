require 'rails_helper'

RSpec.describe Word, type: :model do
    # Association test
    # ensure an game_word record belongs to a single game_matrices record
    it { should belong_to(:game) }
    # Validation test
    # ensure column game_hash is present before saving
    it { should validate_presence_of(:name) }

    # enforces A-Z letters only, minimum of 3 letters, according to boggle rules
    it { should_not allow_value("NY").for(:name) }
    it { should allow_value("GVD").for(:name) }
    it { should_not allow_value("GV3").for(:name) }
end
