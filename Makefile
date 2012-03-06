naKolene:
	mkdir -p public/html/images
	mkdir -p public/html/javascripts
	mkdir -p public/html/stylesheets
	cp -r app/assets/images/* public/html/images/
	cp -r app/assets/javascripts/* public/html/javascripts/
	sass --update app/assets/stylesheets:public/html/stylesheets
	sass --update --style compressed app/assets/stylesheets/futurico-dark-bundle.sass:public/html/stylesheets/futurico-dark-bundle.css
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html
	git add .
	git commit -m "Release"
