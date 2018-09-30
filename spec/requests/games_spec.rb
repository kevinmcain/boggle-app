# spec/requests/games_spec.rb
require 'rails_helper'

RSpec.describe 'Games API', type: :request do
  # initialize test data
  let!(:games) { create_list(:game, 10) }
  let(:game_id) { games.first.id }

  # Test suite for POST /games
  describe 'POST /games' do
    # valid payload
    let(:valid_attributes) { { json_data: 'test', game_hash: 'good_hash' } }

    context 'when the request is valid' do
      before { post '/games', params: valid_attributes }

      it 'creates a game' do
        expect(json['game_hash']).to eq('good_hash')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/games', params: { game_hash: 'hash_value' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Json data can't be blank/)
      end
    end
  end

    # Test suite for GET /games/:id
    describe 'GET /games/:id' do
      before { get "/games/#{game_id}" }

      context 'when the record exists' do
        it 'returns the game' do
          expect(json).not_to be_empty
          expect(json['id']).to eq(game_id)
        end

        it 'returns status code 200' do
          expect(response).to have_http_status(200)
        end
      end

      context 'when the record does not exist' do
        let(:game_id) { 100 }

        it 'returns status code 404' do
          expect(response).to have_http_status(404)
        end

        it 'returns a not found message' do
          expect(response.body).to match(/Couldn't find Game/)
        end
      end
    end

end