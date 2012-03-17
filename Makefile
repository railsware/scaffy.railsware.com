naKolene:
	mkdir -p public/html/images
	mkdir -p public/html/javascripts
	mkdir -p public/html/stylesheets
	cp -r app/assets/images/futurico/* public/html/images/
	cp -r app/assets/javascripts/* public/html/javascripts/
	sass --update app/assets/stylesheets/bundle.sass:public/html/stylesheets/bundle.css
	find public/html/stylesheets -name *.css | xargs sed -i '' 's/futurico\//..\/images\//g'
	find public/html/stylesheets -name *.css | xargs sed -i '' 's/\/assets/javascripts/g'
	find public/html/stylesheets -name *.css | xargs sed -i '' 's/image-url/url/g'
	find public/html -name bundle.html | xargs sed -i '' 's/\/assets\/futurico/images/g'
	rm public/html/javascripts/application.js
	rm public/html/bundle.zip
	zip -r public/html/bundle.zip public/html
