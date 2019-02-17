# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# This file should contain all the record creation needed to seed the database with its default values.
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: 'joe@gmail.com', password: 'password')



ft1 = Action.create(body:"Get Keys from Kathleen",completed:false, category: "task", priority: 0 , date_due: nil, user_id:1)
ft2= Action.create(body:"Send comps to Chris",completed:false, category: "task", priority: 2 , date_due: nil, user_id:1)
ft3 = Action.create(body:"Test keys",completed:false, category: "task", priority: 3 , date_due: nil, user_id:1)
ft4 = Action.create(body:"Set up showings for international buyers",completed:false,  category: "task", priority: 2 , date_due: nil, user_id:1)
ft5 = Action.create(body:"Plan for the next quarter",completed:false,  category: "task", priority: 1 , date_due: nil, user_id:1)
ft6 = Action.create(body:"Plan marketing with Justin",completed:false,  category: "task", priority: 2 , date_due: nil, user_id:1)
ft7 = Action.create(body:"Recruit more agents",completed:false,  category: "task", priority: 3 , date_due: nil, user_id:1)
ft8 = Action.create(body:"Plan holiday party",completed:false,  category: "task", priority: 0 , date_due: nil, user_id:1)
ft9 = Action.create(body:"Proposal for National Conference",completed:false,  category: "task", priority: 1 , date_due: nil, user_id:1)
ft10= Action.create(body:"Talk to Leo about the new role on the Team",completed:false,  category: "task", priority: 2 , date_due: nil, user_id:1)
tt1 = Action.create(body:"Grab the show sheets from the office",completed:false,  category: "task", priority: 3 , date_due: Date.today, user_id:1)
tt2 = Action.create(body:"Renew Licence",completed:false,  category: "task", priority: 2 , date_due: Date.today, user_id:1)
tt3 = Action.create(body:"Pay broker dues",completed:false,  category: "task", priority: 0 , date_due: Date.today, user_id:1)
tt4 = Action.create(body:"Send out comps to Kate",completed:false,  category: "task", priority: 2 , date_due: Date.today, user_id:1)
tt5 = Action.create(body:"Call past client Jake for his birthday",completed:false,  category: "task", priority: 3 , date_due: Date.today, user_id:1)
tt6 = Action.create(body:"Call past client Heather for Homenversery",completed:false,  category: "task", priority: 0 , date_due: Date.today, user_id:1)
tt7 = Action.create(body:"Put for sale sign at 123 Main St",completed:false,  category: "task", priority: 2 , date_due: Date.today, user_id:1)
tt8 = Action.create(body:"Call client Brian to Negotiate offer",completed:false,  category: "task", priority: 3 , date_due: Date.today, user_id:1)
ty1 = Action.create(body:"Call back guests from the open house",completed:false,  category: "task", priority: 2 , date_due: Date.today-1, user_id:1)
ty2 = Action.create(body:"Set up the first time home buyer consult",completed:false,  category: "task", priority: 0 , date_due: Date.today-1, user_id:1)
ty3 = Action.create(body:"Clean car",completed:false,  category: "task", priority: 0 , date_due: Date.today-1, user_id:1)
ty4 = Action.create(body:"Set up a marketing email",completed:false,  category: "task", priority: 2 , date_due: Date.today-1, user_id:1)
fe1 = Action.create(body:"We are meeting Agent Joe to expand the network in the north shore",completed:false,  category: "event", priority: 3 , date_due: Date.today+1, user_id:1)
fe2 = Action.create(body:"We are meeting Agent Jill to develop the team in the south shore",completed:false,  category: "event", priority: 0 , date_due: Date.today+2, user_id:1)
fe3 = Action.create(body:"Metting Joe and Jane for First time home buyer consult",completed:false,  category: "event", priority: 2 , date_due: Date.today+3, user_id:1)
fe4 = Action.create(body:"Meet Carvey to talk about selling his home",completed:false,  category: "event", priority: 3 , date_due: Date.today+4, user_id:1)
fe5 = Action.create(body:"Go to the luxury homes networking event",completed:false,  category: "event", priority: 0 , date_due: Date.today+5, user_id:1)
fe6 = Action.create(body:"Meet Coach Mike for breakfast while they are intown for training",completed:false,  category: "event", priority: 2 , date_due: Date.today+6, user_id:1)
fe8 = Action.create(body:"Aniversery at the franchise",completed:false,  category: "event", priority: 0 , date_due: Date.today+7, user_id:1)
fe9 = Action.create(body:"Rotary meeting",completed:false,  category: "event", priority: 2 , date_due: Date.today+8, user_id:1)
fe10 = Action.create(body:"Dentist appointment",completed:false,  category: "event", priority: 3 , date_due: Date.today+9, user_id:1)
