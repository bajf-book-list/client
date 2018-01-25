'use strict';

(function(module) {

    let bookView = {};

    bookView.initIndexPage = function() {
        $('#detail-vew').hide();
        $('#form-view').hide();
        $('#about-us').hide();
        $('#book-list').show();
        $('#book-list').empty();
        module.Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    };

    bookView.initFormView = function() {
        $('#detail-vew').hide();
        $('#form-view').show();
        $('#about-us').hide();
        $('#book-list').hide();
    };

    bookView.initDetailView = function() {
        $('#detail-vew').show();
        $('#form-view').hide();
        $('#about-us').hide();
        $('#book-list').hide();
    };

    module.bookView = bookView;
})(window);