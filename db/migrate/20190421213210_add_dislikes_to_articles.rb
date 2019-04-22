class AddDislikesToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :dislikes, :integer
  end
end
