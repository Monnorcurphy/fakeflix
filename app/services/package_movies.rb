class PackageMovies
  attr_reader :movie, :errors

 def initialize(movie, movie_url)
    @movie = movie
    @movie_url = movie_url
  end

  def package_movie
    puts "#{@movie} is there a thing?".red
    attrs_hash = {}
    attrs_hash[:title] = @movie['Title']
    attrs_hash[:description] = @movie['Plot']
    if @movie['Actors'].class == String
      attrs_hash[:actors] = @movie['Actors'].split(',')
    end
    attrs_hash[:year] = @movie['Year']
    attrs_hash[:runtime] = @movie['Runtime']
    attrs_hash[:genre] = @movie['Genre']
    attrs_hash[:image_url] = @movie['Poster']
    attrs_hash[:url] = @movie_url
    attrs_hash
  end

  def create_movie
    unless Movie.create(package_movie)
      @errors = movie.errors
      return false
    end
    puts "#{@movie['Title']} has been added to the database!".green
    true
  end

end
