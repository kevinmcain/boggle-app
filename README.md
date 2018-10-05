# BOGGLE

* Ruby version
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin16]
  
* Rails version 5.2.1

* Notable dependencies
  1. react_on_rails
  2. rspec-rails
  3. bootstrap

* How to run the application for the first time

    `$bundle install`
    
    `$yarn install`
    
    `$rails db:migrate`
    
    `$rails server`

* How to run the test suite

    `$bundle exec rspec`

* Steps I took to create this project

    ###### Create a new rails project with ReactJS

    `
    $rails new boggle-app --webpack=react
    $cd boggle-app
    `

    ###### Per, https://www.npmjs.com/package/react-on-rails, added the react_on_rails gem to Gemfile
    gem 'react_on_rails', '11.1.4'

    `$bundle install`

    `$rails generate react_on_rails:install --redux --node`

    ###### Followed the handy tutorial below for TDD of API's
    https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one

### User Interface

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/boggle_app.png)

### Game creation sequence diagram

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/generate_and_find_or_save_game.png)

### Word Validation sequence diagram

![alt text](https://github.com/kevinmcain/boggle-app/blob/master/word_validation.png)
