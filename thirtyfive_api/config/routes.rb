Rails.application.routes.draw do
  resources :movies do
    resources :reviews
  end
  resource :reviews, only: [:destroy]
end
