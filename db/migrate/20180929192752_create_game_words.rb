class CreateGameWords < ActiveRecord::Migration[5.2]
  def change
    create_table :game_words do |t|
      t.string :game_hash
      t.string :word
      t.string :language
      t.boolean :valid
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
