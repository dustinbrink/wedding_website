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

    $('#rsvp_form').submit(function(e) {
        e.preventDefault();
        $.post('/rsvp', {
            name: $('#rsvp_form [name="name"]').val(),
            guests: $('#rsvp_form [name="guests"]').val(),
            comments: $('#rsvp_form [name="comments"]').val()
        }).done(function() {
            $('#rsvp_form').html('<p>Thank you for your RSVP.</p><p>We will see you soon!</p>');
        })
    });

    selectTab($('#nav a').first());
});