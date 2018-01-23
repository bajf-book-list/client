'use strict';

// var _CLIENT_URL = 'https://bajf-book-list.github.io/client' 
// for production: var __API_URL__ = 'https://bajf-book-list.herokuapp.com'
var __API_URL__ = '' // for test environment

// (function(module) {

    pageLoad();

    function Book(title, author, image_url,isbn) {
        this.title = title;
        this.author = author;
        this.image_url = image_url;
        this.isbn = isbn;
    }

    Book.all = [];

    Book.prototype.toHtml = function() {
        var template = Handlebars.compile($('#book-list-template').text());

        // put stuff here!!!

        return template(this);
    }




    Book.loadAll = rows => {
        rows.sort((a, b) => (b.title) - (a.title))
    
        Book.all = rows.map((bookObject) => new Book(bookObject));
    
    };

    Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
        .then(results => {
        Book.loadAll(results);
        callback();
        })
    };



    $('#user-form').on('submit', function(e) {
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
            pageLoad();
        })
        .catch(function(err) {
            console.error(err);
            pageLoad();
        });
    });

    function pageLoad() {
    $.get(`${__API_URL__}/api/v1/books`)
    .then(function(data) {
        console.log('our data:', data);
        $('#results').empty();

        data.rows.forEach(function(item) {
        let content = `
            <h2>title: ${item.title}</h2>
            <p>age: ${item.author}</p>
            <p>image_url: ${item.image_url}</p>
            <p>isbn: ${item.isbn}</p>
            <p>description: ${item.description}</p>
        `;
        $('#results').append(content);
        });
    }, function(err) {
        console.error(err);
    });
    }

// })(window)