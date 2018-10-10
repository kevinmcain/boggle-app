# app/controllers/words_controller.rb
class WordsController < ApplicationController
  include WordsHelper

  before_action :set_game
  before_action :set_game_word, only: [:show, :update, :destroy]

  # POST /games/:game_id/words
  def create

    name = word_params.fetch(:name)

    existing_word = Word.where(:name => name).first

    if existing_word && existing_word.game.id == @game.id
        json_response(existing_word, :conflict)
    else

        word_valid_for_game = game_has_word(@game.json_data, name)

        if word_valid_for_game
            @word = @game.words.create!(word_params)
            json_response(@word, :created)
        else
            json_response(nil, :bad_request)
        end

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