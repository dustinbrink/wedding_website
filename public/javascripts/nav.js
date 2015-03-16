$(document).ready(function() {

    var selectTab = function(tab) {
        $('#nav a').removeClass('selected');
        $('#content').children().addClass('hide');
        tab.addClass('selected');
        var tabText = tab.text();
        $('#'+tabText).removeClass('hide');
        if(tabText == 'Location') {
            resetMap();
        }
    };

    var resetMap = function() {
        var map = $('#map');
        var src = map.attr('src');
        map.attr('src', src);
    };

    $('#nav a').on('click', function() {
        selectTab($(this));
    });

    $('#rsvp').submit(function(e) {
        alert( "Handler for .submit() called." );
        e.preventDefault();
    });

    selectTab($('#nav a').first());
});