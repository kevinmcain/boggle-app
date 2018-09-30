Rails.application.routes.draw do

    # application routes
    root 'boggle#index'
    get 'boggle', to: 'boggle#index'

    # api routes
    post '/input', to: 'input#create'

    resources :games do
        resources :words
    end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
