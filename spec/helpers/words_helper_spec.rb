require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the WordsHelper. For example:
#
# describe WordsHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe WordsHelper, type: :helper do

    # initialize test data
    let!(:games) { create_list(:game, 1) }
    let(:game) { games.first }
    # valid word in game
    let(:valid_word) {'GVD'}
    # NOT valid word in game
    let(:not_valid_word) {'GVDO'}

    # Test word validation
    describe 'game_has_word' do


        context 'when the word is valid' do

            it 'returns true' do
                actual_return_value = game_has_word(game.json_data, valid_word)
                expect(actual_return_value).to eq(true)
            end

        end

        context 'when the word is NOT valid' do

            it 'returns false' do
                actual_return_value = game_has_word(game.json_data, not_valid_word)
                expect(actual_return_value).to eq(false)
            end

        end

    end


end
