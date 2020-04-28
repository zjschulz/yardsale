Rails.application.routes.draw do
  root to: "static#home"
  #static root made for testing purposes
  resources :items
  resources :shops
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end