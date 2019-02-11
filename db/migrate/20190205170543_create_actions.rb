class CreateActions < ActiveRecord::Migration[5.2]
  def change
    create_table :actions do |t|
      t.string :body, null: false
      t.string :category, null: false
      t.boolean :completed, default: false
      t.integer :priority, null: false
      t.date :date_due
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
