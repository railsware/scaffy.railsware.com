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
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html
	git add .
	git commit -m "Release"
	git push origin HEAD
