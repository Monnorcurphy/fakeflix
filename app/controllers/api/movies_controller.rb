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


	def update
	
		@movie = Movie.find(params[:id])
		@movie.avg_rating = params['rating'].to_i
		@movie.save
	end

  def index
    @movies = Movie.all
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :genre, :year, :url)
  end


end
