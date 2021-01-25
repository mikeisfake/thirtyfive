class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :year
      t.string :released
      t.string :genre
      t.text :plot
      t.string :poster
      t.string :imdbid

      t.timestamps
    end
  end
end
