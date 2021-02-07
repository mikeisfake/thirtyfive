class Review < ApplicationRecord
  belongs_to :movie

  validates :body, presence: true
end
