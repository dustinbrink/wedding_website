$(document).ready(function() {

    var selectTab = function(tab) {
        $('#nav a').removeClass('selected');
        $('#content').children().addClass('hide');
        tab.addClass('selected');
        $('#'+tab.text()).removeClass('hide');
    };

    $('#nav a').on('click', function() {
        selectTab($(this));
    });

    selectTab($('#nav a').first());
});