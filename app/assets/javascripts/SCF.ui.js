SCF = {};

$(document).ready(function() {
    // Init custom selects
    $(".select").chosen();

    // Init slideshow
    SCF.Slideshow.init();

    // Init appreciate
    SCF.Appreciate.init();

    // Init equalizer
    SCF.Equalizer.init();

    // Init datepicker
    SCF.Datepicker.init();

    // Init scrollbox
    SCF.Scrollbox.init();

    // Init commutator
    SCF.Commutator.init();
});

