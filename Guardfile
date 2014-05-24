# Guardfile
haml_options = { format: :html5, attr_wrapper: '"', ugly: false } 
guard "haml", input: "haml", output: "www", haml_options: haml_options  do
  watch %r{^haml/.+\.haml}     
end

guard :compass, configuration_file: 'config/compass_config.rb',
      input: "sass", output: "www" do
  watch %r{..\/foo\/bar\/sass\/.*\.sass$}
end

guard 'coffeescript', :input => 'coffee', :output => 'www/javascripts'

guard 'markdown', :convert_on_start => true, :dry_run => false do  
  watch (/haml\/(.+\/)*(.+\.)(md|markdown)/i) do |m|
    "haml/#{m[1]}#{m[2]}#{m[3]}|www/#{m[1]}#{m[2]}html|www/zakki/memo_template.html"
  end
end
