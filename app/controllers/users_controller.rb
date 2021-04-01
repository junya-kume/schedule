class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @calendars = current_user.calendars
  end
end
