naKolene:
	mkdir -p public/html/images
	mkdir -p public/html/javascripts
	mkdir -p public/html/stylesheets
	cp -r app/assets/images/* public/html/images/
	cp -r app/assets/javascripts/* public/html/javascripts/
	sass --update app/assets/stylesheets:public/html/stylesheets
	rm public/html/stylesheets/futurico-dark.css
	rm public/html/stylesheets/framework/config.css
	rm public/html/stylesheets/framework/mixins.css
	find public/html/stylesheets -name *.css | xargs sed -i '' 's/futurico/images/g'
	find public/html/stylesheets -name *.css | xargs sed -i '' 's/image-url/url/g'
	rm public/html/javascripts/application.js
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html
