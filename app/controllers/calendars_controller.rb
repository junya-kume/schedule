class CalendarsController < ApplicationController

  def index
    @calendars = Calendar.all
  end

  def new
    @calendar = Calendar.new
  end

  def show
    @calendar = Calendar.find(params[:id])
  end

  def create
    calendar = Calendar.new(calendar_parameter)
    if calendar.save 
      redirect_to calendars_path
    else
      redirect_to new_calendar_path
    end
  end

  def destroy
    @calendar = Calendar.find(params[:id])
    @calendar.destroy
    redirect_to blogs_path, notice:"削除しました"
  end

  def edit
    @calendar = Calendar.find(params[:id])
  end

  def update
    @calendar = Calendar.find(params[:id])
    if @calendar.update(calendar_parameter)
      redirect_to blogs_path, notice: "編集しました"
    else
      render 'edit'
    end
  end

  private

  def calendar_parameter
    params.require(:calendar).permit(:title, :content, :start_time).merge(user_id: current_user.id)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to new_user_session_path
    end
  end
end
