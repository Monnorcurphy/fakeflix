class AddActors < ActiveRecord::Migration
  def change
    add_column :movies, :actors, :text ,array: true, default: []
  end
end
