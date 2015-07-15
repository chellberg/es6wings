'use strict';

$(document).ready(function () {
  $('form').on('submit', handleSubmit);
});

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var totalPrice = $('input#price').val();
  var wingCount = $('input#count').val();
  console.log('Price per wing: ' + pricePerWing(totalPrice, wingCount));
};

var pricePerWing = function pricePerWing(total, count) {
  return +total / +count;
};
