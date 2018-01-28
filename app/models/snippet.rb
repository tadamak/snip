# frozen_string_literal: true

class Snippet < ApplicationRecord
  PERMITTED_PARAMS = %i[content].freeze

  def sid
    id&.delete("-")
  end

  def to_param
    sid
  end

  def to_key
    [sid]
  end
end
