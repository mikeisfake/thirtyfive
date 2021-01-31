class ApplicationController < ActionController::API

  # def set_movie(string)
  #   result = HTTParty.get("http://www.omdbapi.com/?i=#{string}&apikey=2cedcff3&").compact
  #   dir = result['Director'] == 'N/A' ? result['Writer'] : result['Director']
  #   poster = result['Poster'] == 'N/A' ? 'https://66.media.tumblr.com/5a186c216ce45dbc68730be8ced57a06/29fe15eaade870e6-a7/s400x600/1c5884a55da0a8d151061ab122fbd715e201f7b9.png' : result['Poster']
  #   @movie = Movie.new(
  #     title: result['Title'],
  #     year: result['Year'],
  #     released: result['Released'],
  #     genre: result['Genre'],
  #     director: dir,
  #     poster: poster,
  #     plot: result['Plot'],
  #     imdbid: result['imdbID']
  #   )
  # end
  #
  #
  # def find_or_create_movie(query)
  #   if @movie = Movie.find_by(imdbid: query)
  #     render json: @movie
  #   elsif set_movie(query).save
  #     render json: @movie
  #   end
  # end
end
