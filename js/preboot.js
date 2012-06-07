$(document).ready(function() {
    $("[class^='js-']").each(function(index, element) {
        var partial = $(element).attr("class");
        var template = haml.compileHaml({sourceUrl: 'haml/' + partial + '.haml'});
        $("." + partial).html(template());
    });
});
