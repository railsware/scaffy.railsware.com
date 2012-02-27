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
    $(self.scale).each(function() {
        $(this).slider({
            slide: function(event, ui){
                var scaleHeight = ui.value;

                $(this).css({
                    'height': scaleHeight
                });
            },
            max: 114,
            orientation: 'vertical',
            value: 50
        });
    });
};

// vars
self.element = ".equalizer";
self.scale = self.element + " .scale";
self.slider = self.element + " .slider";

}());
