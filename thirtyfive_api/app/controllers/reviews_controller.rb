require 'pry'
class ReviewsController < ApplicationController

  def index
    @movie = Movie.find_by(id: params[:movie_id])
    @reviews = @movie.reviews

    render json: @reviews
  end

  def create
    @review = Review.create(body: params[:body], movie_id: params[:movie_id])

    render json: @review
  end

end
