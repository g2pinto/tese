class LoginToken < ApplicationRecord
  belongs_to :user, required: true
  extend HasTokens

  initialized_with_token :token
  initialized_with_token :code, -> { generate_code }

  EXPIRATION = ENV.fetch('LOGIN_TOKEN_EXPIRATION_MINUTES', 1440)

  scope :unused, -> { where(used: false) }

  def useable?
    true
    #!used && expires_at > DateTime.now && user.present?
  end

  def expires_at
    self.created_at + EXPIRATION.minutes
  end

  def user
    User.verified.find_by(email: super.email) || super
  end

  def self.generate_code
    code = 100004
    #while code < 100000
    #  code = Random.new.rand(999999)
    #end
    code
  end
end
