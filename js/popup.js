(function() {

    $.ajax({
        url: 'https://web.whatsapp.com/',
        async: true
    }).done(function(data) {

        $('body').html(data);
        console.log(data);
    });
}).call(this);
