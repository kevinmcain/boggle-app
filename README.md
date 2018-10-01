# BOGGLE

* Ruby version
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin16]
  
* Rails version 5.2.1

* System dependencies
  react-on-rails
  rspec-rails
  bootstrap

* Configuration

* Database creation & initialization
  rails db:migrate

* How to run the test suite
  bundle exec rspec

* Steps I took to create this project

    $rails new boggle-app --webpack=react
    $cd boggle-app

    Per, https://www.npmjs.com/package/react-on-rails
    Added the react_on_rails gem to Gemfile
    gem 'react_on_rails', '11.1.4'

    $bundle install

    committed changes

    rails generate react_on_rails:install --redux --node

    rails server - thing runs!

    followed test tutorial here
    https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one

### Assumptions

1. Though recursion is not allowed in production, it is okay for this challenge
2. Words using a given letter more than once renders a negative response
3. No user or auth concerns are necessary

### User Interface

The button clicking for letter selection is current quirky, but is somewhat helpful in testing
Whatever is in the textbox is what gets used/ sent to the server for validation

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/boggle_app.png)

### Game creation sequence diagram

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/generate_and_find_or_save_game.png)

### Word Validation sequence diagram

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/word_validation.png)
