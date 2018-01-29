'use strict';

(function(module) {

    let bookView = {};

    bookView.initIndexPage = function() {
        $('#detail-vew').hide();
        $('#form-view').hide();
        $('#about-us').hide();
        $('#book-list').empty();
        $('#book-list').show();
        module.Book.fetchAll();
        module.Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    
    };

    bookView.initFormView = function() {
        $('#detail-vew').hide();
        $('#form-view').show();
        $('#about-us').hide();
        $('#book-list').hide();
    };

    bookView.initDetailView = function(ctx, next) {
        $('#detail-vew').show();
        $('#form-view').hide();
        $('#about-us').hide();
        $('#book-list').hide();
        next();
    };

    bookView.initSingleView = function(ctx, next) {
        $('#detail-vew').show();
        $('#form-view').hide();
        $('#about-us').hide();
        $('#book-list').hide();
        next();
    };

    module.bookView = bookView;
})(window);