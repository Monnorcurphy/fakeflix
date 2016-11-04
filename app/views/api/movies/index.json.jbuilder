@movies.each do |movie|
  json.set! movie.id do
    json.extract! movie, :id, :title, :description, :year, :url, :image_url
  end
end
