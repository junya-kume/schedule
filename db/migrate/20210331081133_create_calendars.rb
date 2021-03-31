class CreateCalendars < ActiveRecord::Migration[6.0]
  def change
    create_table :calendars do |t|
      t.string :name
      t.string :details
      t.date :date
      t.timestamps
    end
  end
end
