Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :ratings, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :movies, only: [:create, :show, :index]
  end

  root "static_pages#root"
end
