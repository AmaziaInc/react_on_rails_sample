class UsersController < ApplicationController
  def new
    @user = { name: "Stranger" }
  end
end
