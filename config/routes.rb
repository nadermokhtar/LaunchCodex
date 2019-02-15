Rails.application.routes.draw do
  root 'homes#index'
devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :actions do
        patch "/update_completed", to: "actions#update_completed"
        patch "/update_for_today", to: "actions#update_for_today"
        patch "/update_for_future", to: "actions#update_for_future"
      end
    end
  end
end