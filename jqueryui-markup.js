$(function () {
    $("[data-jqui]").each(function (i, el) {
        var options = $(el).data();
        $.each(options.jqui.split(/\s+/), function (i, method) {
            $(el)[method](options);
        });
    });
});