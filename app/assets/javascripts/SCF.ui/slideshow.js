(function() {
function Slideshow() {
}

var klass = Slideshow.prototype;
var self = Slideshow;
SCF.Slideshow = Slideshow;

self.init = function() {
    self.setSlidesWidth();
    self.bindEvents();
};

self.setSlidesWidth = function() {
    var slidesCount = $(self.slide).size();
    var slidesWidth = $(self.slide).width() * slidesCount;

    $(self.slides).width(slidesWidth);
}

self.bindEvents = function() {
    $(self.nextSlide).click(function() {
        var slideWidth = $(self.slide).width();
        var slidesCount = $(self.slide).size();
        var currentMargin = $(self.slides).position().left;

        $(self.slides).css("left", (currentMargin - slideWidth));

        if (currentMargin <= (-slidesCount + 1) * slideWidth) {
            $(self.slides).css("left", 0);
        }
    });

    $(self.prevSlide).click(function() {
        var slideWidth = $(self.slide).width();
        var slidesCount = $(self.slide).size();
        var currentMargin = $(self.slides).position().left;

        $(self.slides).css("left", (currentMargin + slideWidth));

        if (currentMargin >= 0) {
            $(self.slides).css("left", -((slideWidth * slidesCount) - slideWidth));
        }
    });
}

// vars
self.element = ".slideshow";
self.slides = self.element + " .slideshow-slides";
self.slide = self.element + " .each-slide";
self.nextSlide = self.element + " .next";
self.prevSlide = self.element + " .prev";

}());
