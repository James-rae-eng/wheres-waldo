class ChangeCoordinatesToIntegers < ActiveRecord::Migration[7.0]
  def change
    change_column :characters, :xcoordinate, :integer
    change_column :characters, :ycoordinate, :integer
  end
end
