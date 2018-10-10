# app/controllers/games_controller.rb
class GamesController < ApplicationController

  before_action :set_game, only: [:show, :update, :destroy]

  # POST /games
  def create
    existing_game = Game.where(:game_hash => game_params.fetch(:game_hash)).first

    if existing_game
        json_response(existing_game, :conflict)
    else
        @game = Game.create!(game_params)
        json_response(@game, :created)
    end

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
