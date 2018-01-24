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

    function errorCallback(err) {
        console.error(err);
        errorView.initErrorPage();
    }

    module.errorView = errorView;
})(window);