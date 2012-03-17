SCF = {};

$(document).ready(function() {
    // Init custom selects
    $(".select").chosen();
    $(".select-arrowed").chosen();

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

    // Init tabbox
    var tabBox = new SCF.Tabbox(".tabbox");
    tabBox.init();
    $(".tabbox-stuff").tabs();

    // Init pagination
    SCF.Pagination.init();

    // Custom radios
    $(".radiogroup").each(function() {
        var parent = this;

        $(this).find(".radio").click(function() {
        $(parent).find(".radio").removeClass("checked");
            $(this).addClass("checked");
        });
    });

    // Custom checkboxes
    $(".checkbox").click(function() {
        $(this).toggleClass("checked");
    });

    $(".checkbox-light").click(function() {
        $(this).toggleClass("checked");
    });

    // Init custom placeholder for text inputs
    $("input[placeholder], textarea[placeholder]").placeholder();

    // Init Starbar
    var starBar = new SCF.Starbar(".starbar", 3);
    starBar.init();

});

