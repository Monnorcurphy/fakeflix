class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :year, null: false
      t.string :genre, null: false
      t.string :imdb_id
      t.integer :runtime
      t.integer :avg_rating, default: 0
      t.timestamps null: false
    end
    add_index :movies, :title
  end
end
