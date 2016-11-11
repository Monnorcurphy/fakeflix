class Api::MoviesController < ApplicationController


  def show
		@movie = Movie.find(params[:id])
  end


	def update

		@movie = Movie.find(params[:id])
		@movie.avg_rating = params['rating'].to_i
		@movie.save
		render 'api/movies/show'
	end

  def index
    @movies = Movie.all
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :genre, :year, :url)
  end


end
