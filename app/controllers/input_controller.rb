class InputController < ActionController::API
    include Response

  # POST /input
  def create
      json_response(request.body.read, :created)
  end

end