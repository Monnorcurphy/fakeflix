class Api::MoviesController < ApplicationController

	def create
		@movie = Movie.new()
    if @movie.save
			render "api/movie/show"
		else
			render json: @movie.errors.full_messages, status: 422
		end
	end

  def show
		@movie = Movie.find(params[:id])

  end

	def search
		Movie.where("name LIKE ? OR actors LIKE ?", params[:query], params[:query])
	end

  def index
    @movies = Movie.order(:id).all
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :genre, :year, :url)
  end


end
