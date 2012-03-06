naKolene:
	mkdir -p public/html/images
	mkdir -p public/html/javascripts
	mkdir -p public/html/stylesheets
	cp -r app/assets/images/* public/html/images/
	sass --update app/assets/stylesheets:public/html/stylesheets
	sass --update --style compressed app/assets/stylesheets/futurico-dark-bundle.sass:public/html/stylesheets/futurico-dark-bundle.css
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html
	git push origin HEAD
	git push heroku master
