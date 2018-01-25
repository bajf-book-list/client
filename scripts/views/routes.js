'use strict';

page('/api/v1/books/:id', window.Book.fetchOne);