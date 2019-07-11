Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #for testing only
  resources :biz, only: :show
  # end of test#


  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources  :businesses, only: [:create, :index, :show, :update, :destroy]
    resources :biz_photos, only: [:create, :destroy]
    resources  :reviews, only: [:create, :update, :destroy]

  end

end