Rails.application.routes.draw do
  devise_for :users
  root to: 'calendars#index'
  resources :users, only: [:new, :create, :show]
  resources :calendars
end
