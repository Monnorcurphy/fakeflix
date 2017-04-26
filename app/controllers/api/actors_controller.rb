class Api::ActorsController < ApplicationController

  def show
		@actor = Actor.find(params[:id])
  end


  def index
    @actors = Movie.all
  end

  private

  def actor_params
    params.require(:actor).permit(:name, :db_id)
  end

end
