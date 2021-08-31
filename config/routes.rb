Rails.application.routes.draw do
  # root "articles#index"
  root "pages#home"
  get '*path', to: 'pages#home', via: :all
  # resources :articles do
  #   resources :comments
  # end
end
