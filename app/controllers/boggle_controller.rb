# frozen_string_literal: true

class BoggleController < ApplicationController
  layout "boggle"

  def index
    @boggle_props = { name: "Stranger" }
  end
end
