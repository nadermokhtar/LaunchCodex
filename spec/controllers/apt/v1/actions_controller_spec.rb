require 'rails_helper'

RSpec.describe Api::V1::ActionsController, type: :controller do
#     before(:each) do
#       Action.create(body:"Get Keys from Kathleen", completed:false, category: "task", priority: 0 , date_due: nil, user_id:1)
#       User.create(email: "brian.wilson@gmail.com", password: "Boston23!")
#       sign_in User.last
#     end

#     it "creates a new Action" do
#       first_action = Action.last
#       post_json = {
#         body: Action.last.body,
#         completed: Action.last.completed,
#         category: Action.last.category,
#         priority: Action.last.priority,
#         date_due: Action.last.date_due
#       }

#       post(:create, params: {user_id: User.last.id, action: post_json})
#       expect(Action.count).to eq 1

#     end

#     it "fails to creates a new review without description" do
#       post_json = {
#         price_rating: Review.last.price_rating
#       }
#       prev_count = Review.count
#       Review.create( price_rating: 5, service_rating: 3, reliability_rating: 5,
#         overall_rating: 4, user: User.last, airline: Airline.last)
#       expect(Review.count).to eq(prev_count)
#     end

#     it "fails to creates a new review without price rating" do
#       post_json = {
#         description: Review.last.description,
#       }
#       prev_count = Review.count
#       Review.create(description: 'Review', service_rating: 4, reliability_rating: 4, overall_rating: 4, user: User.last, airline: Airline.last)
#       expect(Review.count).to eq(prev_count)
#     end

#     it "returns the json of the new actions" do
#       post_json = {
#         body: Action.last.body,
#         completed: Action.last.completed,
#         category: Action.last.category,
#         priority: Action.last.priority,
#         date_due: Action.last.date_due
#       }

#       post(:create, params: { user_id: User.last.id, action: post_json})
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq("application/json")
#       review = returned_json["review"]

#       expect(returned_json).to be_kind_of(Hash)
#       expect(returned_json).to_not be_kind_of(Array)
#       expect(Review.last.description).to eq 'Review'
#       expect(Review.last.overall_rating).to eq 4
#     end

  end