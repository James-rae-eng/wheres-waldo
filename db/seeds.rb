# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Character.create(name: 'waldo1', xcoordinate: 491, ycoordinate: 575)
Character.create(name: 'waldo2', xcoordinate: 711, ycoordinate: 244)
Character.create(name: 'waldo3', xcoordinate: 123, ycoordinate: 227)

User.create(name: 'James', timeRecord: 15)
User.create(name: 'Ocean', timeRecord: 70)
User.create(name: 'anon', timeRecord: 223)
User.create(name: 'winner', timeRecord: 3)