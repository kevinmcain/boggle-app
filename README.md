# BOGGLE

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Steps I took to create this project

$rails new boggle-app --webpack=react
$cd boggle-app

Per, https://www.npmjs.com/package/react-on-rails
Added the react_on_rails gem to Gemfile
gem 'react_on_rails', '11.1.4' # Use the exact gem version to match npm version

$bundle install

committed changes

rails generate react_on_rails:install --redux --node

rails server - thing runs!

follow test tutorial here
https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one


Assumptions:

1. Though recursion is not allowed in production, it is okay for this challenge
2. Words using a given letter more than once renders a negative response
3. No auth user or auth concerns are necessary

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/boggle_app.png)


![alt text](https://github.com/kevinmcain/boggle-app/blob/master/generate_and_find_or_save_game.png)


![alt text](https://github.com/kevinmcain/boggle-app/blob/master/word_validation.png)
