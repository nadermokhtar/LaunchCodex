# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# This file should contain all the record creation needed to seed the database with its default values.
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: 'joe@gmail.com', password: 'password')
user2 = User.create(email: 'mike@gmail.com', password:'password')
user3 = User.create(email: 'casi@gmail.com', password: 'password')
user4 = User.create(email: 'nick@gmail.com', password: 'password')
user5 = User.create(email: 'raj@gmail.com', password:'password')
user6 = User.create(email: 'riley@gmail.com', password: 'password')
user7 = User.create(email: 'gil@gmail.com', password: 'password')
user8 = User.create(email: 'gabi@gmail.com', password:'password')
user9 = User.create(email: 'alex@gmail.com', password: 'password')


action1 = Action.create(body:"Some task",completed:true, category: "task", priority: 0 , date_due: Date.today, user_id:1)
action2 = Action.create(body:"IDK task",completed:true, category: "task", priority: 0 , date_due: Date.today, user_id:1)
action3 = Action.create(body:"IDK task",completed:true, category: "task", priority: 0 , date_due: Date.today, user_id:1)
action4 = Action.create(body:"IDK task",completed:true,  category: "task", priority: 0 , date_due: Date.today, user_id:1)


# {body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"Some task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.today, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , date_due: Date.yesterday, user_id:1},{body:"IDK task", category: "task", priority: 0 , user_id:1},{body:"IDK task", category: "task", priority: 0 , user_id:1},{body:"IDK task", category: "task", priority: 0 , user_id:1}