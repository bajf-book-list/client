'use strict';
// var _CLIENT_URL = 'github url here!!!!!!!! 
var __API_URL__ = 'https://bajf-book-list.herokuapp.com'

pageLoad();

$('#user-form').on('submit', function(e) {
  e.preventDefault();

  let data = {
    name: e.target.name.value,
    age: e.target.age.value,
    ninja: e.target.ninja.value
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
        <h2>name: ${item.name}</h2>
        <p>age: ${item.age}</p>
        <p>ninja status: ${item.ninja}</p>
      `;
      $('#results').append(content);
    });
  }, function(err) {
    console.error(err);
  });
}
