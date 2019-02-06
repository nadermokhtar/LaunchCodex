class CreateActions < ActiveRecord::Migration[5.2]
  def change
    create_table :actions do |t|
      t.string :body, null: false
      t.string :category, null: false
      t.boolean :completed, null: false
      t.integer :priority, null: false
      t.date :date_due, null: false
      t.belongs_to :user, null: false
      t.belongs_to :action, null: false

      t.timestamps
    end
  end
end
