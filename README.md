# README

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