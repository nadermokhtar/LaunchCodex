class Api::V1::ActionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user, except: :show

  def index
    render json: Action.all.order('created_at desc')
  end
  def create

    new_action = Action.new(body: action_params[:body], category: action_params[:category], completed: action_params[:completed], date_due: action_params[:date_due], priority: action_params[:priority],  user_id: action_params[:user_id])
    new_action.save
    render json: new_action
  end

  def show
    render json: Action.find(params[:id])
  end

  def update
    Action.update(params[:id], :completed => !:completed)
  end

  def destroy
    if current_user_access
    binding.pry
      Action.destroy(params[:id])
    else
      render json: {message: "You can only delete your own Actions."}, status: 401
    end
  end

  private

  def action_params
    params.permit(:body, :category, :completed, :date_due, :priority, :user_id)
  end

  def authorize_user
    if !user_signed_in?
      render json: {message: "You must be signed in to create a Action."}

    end
  end

  def current_user_access
    current_user.id == Action.find(params[:id]).user_id
  end
end
