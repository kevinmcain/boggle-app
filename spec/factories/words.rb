# spec/factories/words.rb
FactoryBot.define do
  factory :word do
    name { Faker::Lorem.word }
  end
end