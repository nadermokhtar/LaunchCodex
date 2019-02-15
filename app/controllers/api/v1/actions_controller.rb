class Api::V1::ActionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authorize_user, except: :show

  def index
    render json: prepare_actions
  end

  def create
    new_action = Action.new(body: action_params[:body], category: action_params[:category], completed: action_params[:completed], date_due: action_params[:date_due], priority: action_params[:priority],  user: current_user)
    new_action.save
    render json: prepare_actions
  end

  def show
    render json: Action.find(params[:id])
  end

  def update_completed
    action = Action.find(params[:action_id])
    action.update(completed: !action.completed?)
    render json: prepare_actions
  end

  def update_for_today
    Action.update(params[:action_id], :date_due => Date.today)
    render json: prepare_actions
  end

  def update_for_future
    Action.update(params[:action_id], :date_due => nil)
    render json: prepare_actions
  end

  def destroy
    if current_user_access
      Action.destroy(params[:id])
      render json: prepare_actions
    else
      render json: {message: "You can only delete your own Actions."}, status: 401
    end
  end

  private

  def prepare_actions
    today = current_user.actions.where(date_due: Date.today).order('created_at desc')
    yesterday = current_user.actions.where(date_due: Date.today-1).order('created_at desc')
    future = current_user.actions.where(date_due: nil).order('created_at desc')
    events = current_user.actions.where(category: "event").order('date_due asc')
    {todays_actions: today, yesterday_actions: yesterday, future_actions: future, all_events: events}
  end

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
