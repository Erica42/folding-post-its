get '/' do
  @type = params[:origami_type]
  if request.xhr?
    "#{@type}"
  else
  erb :index
  end
end

# get '/cranes/:id' do

# end

