class PackageMovies
  attr_reader :movie, :errors

  def initialize(movie, movie_url, actors_url)
    @movie = movie
    @movie_url = movie_url
    @actors_url = actors_url
  end

  def package_movie
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

  def package_actor(actor)
    if (actor) and (@actors_url[actor]) and (@actors_url[actor]["results"]) and (@actors_url[actor]["results"][0])
      attrs_hash= {}
      attrs_hash[:name] = actor
      attrs_hash[:db_id] = @actors_url[actor]["results"][0]["id"]
      attrs_hash
    end
  end

  def create_actor
    @actors_url.keys().each do |actor|
      unless Actor.create(package_actor(actor))
        @errors = actor.errors
        return false
      end

    end

  end



end
