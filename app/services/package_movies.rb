class PackageMovies
  attr_reader :movie, :errors

  def initialize(movie)
    @movie = movie
  end

  def package_movie
    attrs_hash = {}
    attrs_hash[:title] = @movie['Title']
    attrs_hash[:description] = @movie['Plot']
    attrs_hash[:actors] = [@movie['Actors']]
    attrs_hash[:year] = @movie['Year']
    attrs_hash[:runtime] = @movie['Runtime']
    attrs_hash[:genre] = @movie['Genre']
    attrs_hash[:image_url] = @movie['Poster']

    attrs_hash
  end

  def create_movie
    unless Movie.create(package_movie)
      @errors = movie.errors
      return false
    end
    puts "#{@movie['Title']} has been added to the database!"
    true
  end

end
