# spec/requests/words_spec.rb
require 'rails_helper'

RSpec.describe 'Words API' do
  # Initialize the test data
  let!(:game) { create(:game) }
  let!(:words) { create_list(:word, 20, game_id: game.id) }
  let(:game_id) { game.id }
  let(:id) { words.first.id }



  # Test suite for POST /games/:game_id/words
  describe 'POST /games/:game_id/words' do
    let(:valid_attributes) { { name: 'GVD' } }

    context 'when request attributes are valid' do
      before { post "/games/#{game_id}/words", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when word not in game' do
      before { post "/games/#{game_id}/words", params: { name: 'WORDNOTINGAME' } }

      it 'returns status code 400' do
        expect(response).to have_http_status(400)
      end
    end

    context 'when an invalid request' do
      before { post "/games/#{game_id}/words", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/param is missing or the value is empty: name/)
      end
    end
  end




end