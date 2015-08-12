(function() {
    $(document).ready(function() {
        $.ajax({
            url: 'https://web.whatsapp.com/',
            async: true
        }).done(function(data) {
            var regexp = /src="/g;
            var match;
            while ((match = regexp.exec(data)) != null) {
                data = data.slice(0, match.index+5) + "https://web.whatsapp.com" + data.slice(match.index+5);
            }
            regexp = /https:\/\/web.whatsapp.com\/\//g;
            while ((match = regexp.exec(data)) != null) {
                data = data.slice(0, match.index) + "https://" + data.slice(match.index+26)
            }
            regexp = /href="/g;
            while ((match = regexp.exec(data)) != null) {
                data = data.slice(0, match.index+6) + "https://web.whatsapp.com" + data.slice(match.index+6);
            }
            $('body').html(data);
            console.log(data);
        });
    });
}).call(this);