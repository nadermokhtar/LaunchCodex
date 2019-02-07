class Action < ApplicationRecord
  validates :body, presence: true
  validates :date_due, presence: true
  validates :category, presence: true
  validates :priority, presence: true
  validates :user_id, presence: true
  belongs_to :user
end
