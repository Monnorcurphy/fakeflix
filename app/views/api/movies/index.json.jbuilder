@movies.each do |movie|
  json.set! movie.id do
    json.extract! movie, :id, :title, :description, :genre, :year, :url, :image_url
  end
end
