# require 'rails_helper'

# RSpec.describe Api::V1::ReviewsController, type: :controller do
#     before(:each) do
#       Airline.create(name: "American-Airlines", destinations: "Argentina", overall_rating: "5")
#       User.create(email: "brian.wilson@gmail.com", password: "Boston23!")
#       Review.create(description: 'Review', price_rating: 4, service_rating: 4, reliability_rating: 5, overall_rating: 4, user: User.last, airline: Airline.last)
#       sign_in User.last
#     end

#     it "creates a new review" do
#       first_airline = Airline.last
#       post_json = {
#         description: Review.last.description,
#         price_rating: Review.last.price_rating,
#         service_rating: Review.last.service_rating,
#         reliability_rating: Review.last.reliability_rating,
#         overall_rating: Review.last.overall_rating
#       }

#       post(:create, params: {user_id: User.last.id, airline_id: Airline.last.id, review: post_json})
#       expect(Review.count).to eq 1

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

#     it "returns the json of the new review" do
#       post_json = {
#         description: Review.last.description,
#         price_rating: Review.last.price_rating,
#         service_rating: Review.last.service_rating,
#         reliability_rating: Review.last.reliability_rating,
#         overall_rating: Review.last.overall_rating
#       }

#       post(:create, params: {airline_id: Airline.last.id, user_id: User.last.id, review: post_json})
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq("application/json")
#       review = returned_json["review"]

#       expect(returned_json).to be_kind_of(Hash)
#       expect(returned_json).to_not be_kind_of(Array)
#       expect(Review.last.description).to eq 'Review'
#       expect(Review.last.overall_rating).to eq 4
#     end

#   end