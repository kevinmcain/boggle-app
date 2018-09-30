# app/controllers/games_controller.rb
class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_game, only: [:show, :update, :destroy]

  # POST /games
  def create
    @game = Game.create!(game_params)
    json_response(@game, :created)
  end

  # GET /games/:id
  def show
    json_response(@game)
  end

  private

  def game_params
    # whitelist params
    params.permit(:json_data, :game_hash, :created_by)
  end

  def set_game
    @game = Game.find(params[:id])
  end
end
