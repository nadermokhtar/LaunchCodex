class Action < ApplicationRecord
  validates :body, presence: true
  validates :category, presence: true
  validates :priority, presence: true

  belongs_to :user
end
