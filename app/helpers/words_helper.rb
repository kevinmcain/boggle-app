module WordsHelper

    def game_has_word(game, word)

        game_json = JSON.parse(game);

        if find_word(game_json, word)
            return true
        else
            return false
        end

    end

    def find_word(gameMatrix, word)

       found = false
       visited = Array.new(gameMatrix.length) { Array.new(gameMatrix[0].length, false) }

       # Loop over each row array.
       gameMatrix.each_with_index do |row,i|

           # Loop over each cell in the row.
           row.each_with_index do |letter,j|

              if word[0] == letter
                 found = search_word(word, 1, gameMatrix, i, j, visited)
                 if found
                    return true
                 end
              end

           end

           # End of row.

       end

       return found
    end


    def search_word(word, word_index, gameMatrix, i, j, visited)

     if word_index == word.length
        puts "FOUND!"
        return true
     end

     found = false

     if in_bounds_and_not_visited(gameMatrix, i, j, visited)

        puts "in_bounds_and_not_visited #{i} #{j}"
        visited[i][j] = true


        #puts "comparing: #{gameMatrix[i+1][j+1]} to #{word[word_index]}"

        if in_bounds_and_not_visited(gameMatrix, i+1, j+1, visited) && gameMatrix[i+1][j+1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i} j: #{j}"
            found = search_word(word, word_index+1, gameMatrix, i+1, j+1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i, j+1, visited) && gameMatrix[i][j+1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i} j: #{j+1}"
            found = search_word(word, word_index+1, gameMatrix, i, j+1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i-1, j+1, visited) && gameMatrix[i-1][j+1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i-1} j: #{j+1}"
            found = search_word(word, word_index+1, gameMatrix, i-1, j+1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i+1, j, visited) && gameMatrix[i+1][j] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i+1} j: #{j}"
            found = search_word(word, word_index+1, gameMatrix, i+1, j, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i+1, j-1, visited) && gameMatrix[i+1][j-1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i+1} j: #{j-1}"
            found = search_word(word, word_index+1, gameMatrix, i+1, j-1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i, j-1, visited) && gameMatrix[i][j-1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i} j: #{j-1}"
            found = search_word(word, word_index+1, gameMatrix, i, j-1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i-1, j-1, visited) && gameMatrix[i-1][j-1] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i-1} j: #{j-1}"
            found = search_word(word, word_index+1, gameMatrix, i-1, j-1, visited)

        end

        if in_bounds_and_not_visited(gameMatrix, i-1, j, visited) && gameMatrix[i-1][j] == word[word_index]

            puts "found letter: #{word[word_index]} i: #{i-1} j: #{j}"
            found = search_word(word, word_index+1, gameMatrix, i-1, j, visited)

        end

        visited[i][j] = false


     end

    return found

    end


    def in_bounds_and_not_visited(gameMatrix, i, j, visited)
        if i >= 0 && i < gameMatrix.length && j >= 0 && j < gameMatrix[0].length && !visited[i][j]
         return true
        else
         return false
        end
    end

end
