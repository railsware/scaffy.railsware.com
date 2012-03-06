naKolene:
	mkdir -p public/html/images
	mkdir -p public/html/javascripts
	mkdir -p public/html/stylesheets
	cp app/assets/images/* public/html/images/

	sass --update app/assets/stylesheets:public/html/stylesheets
	rm public/html/stylesheets/futurico-dark.scss
	sass --update --style compressed app/assets/stylesheets/futurico-dark-bundle.sass:public/html/stylesheets/futurico-dark-bundle.css
	echo "naKolene is Ready to deploy"
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html

