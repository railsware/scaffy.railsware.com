(function() {
function Equalizer() {
}

var klass = Equalizer.prototype;
var self = Equalizer;
SCF.Equalizer = Equalizer;

self.init = function() {
    self.bindEvents();
};

self.bindEvents = function() {
    $(self.bar).each(function() {
        // Slider mechanics
        $(this).slider({
            slide: function(event, ui){
                var scaleHeight = ui.value;

                $(this).find(self.scale).css({
                    'height': scaleHeight
                });
            },
            max: 114,
            orientation: 'vertical',
            value: 50
        });

        // Set a default value for all bars
        $(this).find(self.scale).css('height', 50);
    });
};

// vars
self.element = ".equalizer";
self.bar = self.element + " .bar";
self.scale = ".scale";

}());
