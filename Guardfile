# Guardfile
haml_options = { format: :html5, attr_wrapper: '"', ugly: false } 
guard "haml", input: "haml", output: "www", haml_options: haml_options  do
  watch %r{^haml/.+\.haml}     
end

guard :compass, configuration_file: 'config/compass_config.rb',
      input: "sass", output: "www" do
  watch %r{..\/foo\/bar\/sass\/.*\.sass$}
end
