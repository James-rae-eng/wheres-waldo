class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :xcoordinate
      t.string :ycoordinate

      t.timestamps
    end
  end
end
