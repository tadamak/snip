# frozen_string_literal: true

class InitSchema < ActiveRecord::Migration[5.2]
  def change
    enable_extension "pgcrypto" unless extension_enabled?("pgcrypto")

    create_table :snippets, id: :uuid, default: "gen_random_uuid()" do |t|
      t.text :content

      t.timestamps
    end
    add_index "snippets", ["created_at"], name: "index_sunippets_on_created_at", using: :btree
    add_index "snippets", ["updated_at"], name: "index_sunippets_on_updated_at", using: :btree
  end
end
