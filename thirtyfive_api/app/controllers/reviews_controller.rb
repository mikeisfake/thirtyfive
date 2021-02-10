require 'pry'
class ReviewsController < ApplicationController

  def index
    @movie = Movie.find_by(id: params[:movie_id])
    @reviews = @movie.reviews

    render json: @reviews
  end

  def create
    @review = Review.create(body: params[:body], movie_id: params[:movie_id])
    @movie = Movie.find_by(id: params[:movie_id])
    @reviews = @movie.reviews.reverse
    render json: @reviews
  end

  def destroy
    @review = Review.find_by(id: params[:review][:id])
    @movie = Movie.find_by(id: @review.movie_id)
    @review.delete

    render json: @movie.reviews
  end

end
