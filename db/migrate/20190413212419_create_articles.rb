class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :url
      t.string :image
      t.string :date

      t.timestamps
    end
  end
end
