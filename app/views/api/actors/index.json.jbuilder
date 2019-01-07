@actors.each do |actor|
  json.set! actor.id do
    json.extract! movie, :db_id, :name
  end
end
