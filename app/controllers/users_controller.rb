class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @calendars = current_user.calendars.order("start_time ASC")
  end
end
