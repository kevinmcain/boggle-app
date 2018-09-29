class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :json_data
      t.string :game_hash

      t.timestamps
    end
  end
end
