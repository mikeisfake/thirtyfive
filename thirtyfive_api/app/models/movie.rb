class Movie < ApplicationRecord
  has_many :reviews

  validates :imdbid, presence: true
end
