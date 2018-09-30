# spec/factories/games.rb
FactoryBot.define do
  factory :game do
    json_data { Faker::Lorem.word }
    game_hash { Faker::Lorem.word }
  end
end