Rails.application.routes.draw do
  root "home#index"

  resource :call_back_request, only: :create
end
