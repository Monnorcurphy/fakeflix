class Movie < ActiveRecord::Base
  validates :title, :description, :year, :genre, presence: true
  
end
