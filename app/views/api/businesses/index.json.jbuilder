
@bizs.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :business_name
    json.photoUrl url_for(bench.photo)
  end
end

