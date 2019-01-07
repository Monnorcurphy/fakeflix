class AddActorId < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.string :name, null: false
      t.integer :db_id
      t.timestamps null: false
    end
  end
end
