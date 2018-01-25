'use strict';

page('/', window.bookView.initIndexPage);
page('/books/:book_id', window.Book.fetchOne, window.bookView.initDetailView);
page('/books/new', window.bookView.initFormView);
page();