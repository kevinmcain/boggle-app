# app/controllers/words_controller.rb
class WordsController < ApplicationController
  before_action :set_game
  before_action :set_game_word, only: [:show, :update, :destroy]

  # POST /games/:game_id/words
  def create
    @game.words.create!(item_params)
    json_response(@game, :created)
  end

  private

  def item_params
    params.permit(:name)
  end

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_game_word
    @item = @game.words.find_by!(id: params[:id]) if @game
  end

end