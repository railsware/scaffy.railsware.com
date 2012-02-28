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
    $(self.element).datepicker();
};

// vars
self.element = ".datepicker-placeholder";

}());
