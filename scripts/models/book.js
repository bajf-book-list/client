'use strict';

//var __API_URL__ = 'https://bajf-book-list.herokuapp.com'; // for production
 var __API_URL__ = ''; // for test environment

(function(module) {

    function Book(title, author, image_url, isbn, description) {
        this.title = title;
        this.author = author;
        this.image_url = image_url;
        this.isbn = isbn;
        this.description = description;
    };

    Book.all = [];
    Book.single = [];

    Book.prototype.toHtml = function() {
        var template = Handlebars.compile($('#book-list-template').text());

        // put stuff here!!!

        return template(this);
    };

    Book.loadAll = rows => {
        console.log('rows.rows:', rows.rows);
        Book.all = rows.rows.map(bookObject => new Book(bookObject.title, bookObject.author, bookObject.image_url, bookObject.isbn, bookObject.description));
        console.log('Book.all:', Book.all);
    };

    Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
        .then(results => {
        console.log('results:', results);
        Book.loadAll(results);
        }).then(callback)
        .catch(errorCallback);
    };

    Book.fetchOne = (ctx, next) => {
        $.ajax({
            url: '/api/v1/books/', 
            method: 'GET',
            success: function(data, message) {
                console.log('success: ',data);
            }
        });
        next();
    };

    Book.loadSingle = rows => {
        console.log('rows.rows:', rows.rows);
        Book.single = rows.rows.map(bookObject => new Book(bookObject.title, bookObject.author, bookObject.image_url, bookObject.isbn, bookObject.description));
        console.log('Book.single:', Book.single);


    $('#book-form').on('submit', function(e) {
        e.preventDefault();
    
        let data = {
            title: e.target.title.value,
            author: e.target.author.value,
            image_url: e.target.image_url.value,
            isbn: e.target.isbn.value,
            description: e.target.description.value
        }
    
        $.post(`${__API_URL__}/api/v1/books`, data)
        .then(function() {
            console.log('single book create data: ', data);
            window.bookView.initIndexPage();
        })
        .catch(function(err) {
            console.error(err);
            window.bookView.initIndexPage();
        });
    });   

    function errorCallback(err) {
        console.error(err);
        window.errorView.initErrorPage();
    };

    module.Book = Book;
})(window);
