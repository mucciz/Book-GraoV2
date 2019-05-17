jQuery(document).ready(function () {
    jQuery(function () {
        $("#picker").datepicker();
    });
    jQuery(".ton").click(function () {
        jQuery.noConflict();
        jQuery(".book-container").slideToggle();
    });
});
