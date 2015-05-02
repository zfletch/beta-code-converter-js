(function () {
'use strict';

var gr_input = document.getElementById('gr-input');
var bt_input = document.getElementById('bt-input');

gr_input.addEventListener('input', function() {
  if (document.activeElement === gr_input) {
    bt_input.value = Converter.grToBt(gr_input.value);
  } else {
    console.log("NOT ACTIVE");
  }
}, true);

bt_input.addEventListener('input', function() {
  gr_input.value = Converter.btToGr(bt_input.value);
}, true);

}());
