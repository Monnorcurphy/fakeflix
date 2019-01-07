class Actor < ActiveRecord::Base
    validates :name, presence: true
end
