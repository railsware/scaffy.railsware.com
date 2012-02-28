(function() {
function Datepicker() {
}

var klass = Datepicker.prototype;
var self = Datepicker;
SCF.Datepicker = Datepicker;

self.init = function() {
    self.bindEvents();
};

self.bindEvents = function() {
    $(self.element).datepicker({
        showButtonPanel: true,
        minDate: -20,
        maxDate: "+1M +10D"
    });
};

// vars
self.element = ".datepicker-placeholder";

}());
