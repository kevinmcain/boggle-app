# spec/factories/games.rb
FactoryBot.define do
  factory :game do
    json_data { "[[\"G\",\"S\",\"F\",\"O\"],[\"T\",\"V\",\"E\",\"E\"],[\"W\",\"N\",\"D\",\"T\"],[\"Y\",\"T\",\"H\",\"Qu\"]]" }
    game_hash { Faker::Lorem.word }
  end
end