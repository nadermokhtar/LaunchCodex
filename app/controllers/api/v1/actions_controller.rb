class Api::V1::ActionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user, except: :show

  def create
    new_action = Action.new(body: action_params[:body], category: action_params[:category], completed: action_params[:completed], date_due: action_params[:date_due], priority: action_params[:priority],  user_id: current_user)
    render json: new_action
  end

  def show
    render json: Action.find(params[:id])
  end

  def destroy
    if current_user_access
      Action.destroy(params[:id])
    else
      render json: {message: "You can only delete your own Actions."}, status: 401
    end
  end

  private

  def Action_params
    params.permit(:description, :category, :completed, :date_due, :priority)
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
