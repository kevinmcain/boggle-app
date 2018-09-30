# app/controllers/words_controller.rb
class WordsController < ApplicationController
  include WordsHelper
  skip_before_action :verify_authenticity_token # todo is this needed when using from app?
  before_action :set_game
  before_action :set_game_word, only: [:show, :update, :destroy]

  # POST /games/:game_id/words
  def create

    # todo there has got to be a better way to throw exceptions without saving
    @word = Word.new(word_params)
    unless @word.valid?
        @game.words.create!(word_params)
    end

    word_valid_for_game = game_has_word(@game.json_data, @word.name)

    if word_valid_for_game
        @word = @game.words.create!(word_params)
        json_response(@word, :created)
    else
        json_response(@word, :bad_request)
    end

  end

  private

  def word_params
    params.permit(:name)
  end

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_game_word
    @item = @game.words.find_by!(id: params[:id]) if @game
  end

end