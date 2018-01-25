'use strict';

page('/', window.bookView.initIndexPage);
page('/books/:book_id', window.bookView.initDetailView);
page('/books/new', window.bookView.initFormView);
page();