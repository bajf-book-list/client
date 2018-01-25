'use strict';

(function(module) {

    let bookView = {};

    bookView.initIndexPage = function() {
        $('.container').show();
        $('#book-view').show();
        module.Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    };

    module.bookView = bookView;
})(window);