/* global $ document console */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

$(document).ready(function () {
  $('form').on('submit', handleSubmit);
});

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var totalPrice = $('input#price').val();
  var wingCount = $('input#count').val();
  var wingCalc = new WingCalculator(totalPrice, wingCount);

  console.log('Price per wing: ' + wingCalc.pricePerWing());
};

var WingCalculator = (function () {
  function WingCalculator(totalPrice, wingCount) {
    _classCallCheck(this, WingCalculator);

    this.totalPrice = totalPrice;
    this.wingCount = wingCount;
  }

  _createClass(WingCalculator, [{
    key: 'pricePerWing',
    value: function pricePerWing() {
      return +this.totalPrice / +this.wingCount;
    }
  }]);

  return WingCalculator;
})();
