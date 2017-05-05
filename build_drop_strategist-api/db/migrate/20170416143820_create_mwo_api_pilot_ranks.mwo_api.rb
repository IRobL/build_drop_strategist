# This migration comes from mwo_api (originally 20170416015810)
class CreateMwoApiPilotRanks < ActiveRecord::Migration[5.0]
  def change
    create_table :mwo_api_pilot_ranks do |t|
      t.integer :crawl_batch
      t.integer :season
      t.integer :rank
      t.string :pilot_name
      t.integer :wins
      t.integer :losses
      t.integer :matches
      t.decimal :winloss_ratio
      t.integer :kills
      t.integer :deaths
      t.decimal :killdeath_ratio
      t.integer :avg_match_score

      t.timestamps
    end
  end
end
