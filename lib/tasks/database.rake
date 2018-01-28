namespace :db do
  desc "Initializes the database"
  task :overhaul do
    %w(db:drop db:create db:migrate db:seed).each do |t|
      Rake::Task[t].invoke
    end
  end
end
