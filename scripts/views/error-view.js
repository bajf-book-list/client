'use strict';

(function(module) {
    let errorView = {};

    errorView.initErrorPage = function(err) {
        $('.container').hide();
        $('.error-view').show();
        $('#error-message').empty();

        let template = Handlebars.compile($('#error-template').text());
        $('#error-message').append(template(err));
    };

    module.errorView = errorView;
})(window);