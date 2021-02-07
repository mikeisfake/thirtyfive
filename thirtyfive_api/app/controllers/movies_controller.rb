require 'pry'
class MoviesController < ApplicationController

  def index
    @movies = Movie.all.sample(6)
    render json: @movies
  end

  def show
    @movie = Movie.find_by(id: params[:id])
    render json: @movie
  end

  def create
    @movie = Movie.find_or_create_by(imdbid: params[:movie][:imdbid]) do |movie|
      movie.title = params[:movie][:title]
      movie.director = params[:movie][:director]
      movie.year = params[:movie][:year]
      movie.released = params[:movie][:released]
      movie.genre = params[:movie][:genre]
      movie.plot = params[:movie][:plot]
      movie.poster = params[:movie][:poster]
      movie.imdbid = params[:movie][:imdbid]
    end
    render json: @movie
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :director, :plot, :released, :genre, :imdbid, :poster)
  end

end
