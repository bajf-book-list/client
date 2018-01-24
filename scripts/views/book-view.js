'use strict';

(function(module) {

    let bookView = {};

    bookView.initIndexPage = function() {
        $('.container').hide();
        $('.book-view');
        window.Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    }

    module.bookView = bookView;
})(window);