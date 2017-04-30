(function () {
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var gr_input = document.getElementById('gr-input');
  var bt_input = document.getElementById('bt-input');

  gr_input.addEventListener('input', function() {
    if (document.activeElement === gr_input) {
      bt_input.value = greekToBetaCode(gr_input.value);
    } else {
      console.log("NOT ACTIVE");
    }
  }, true);

  bt_input.addEventListener('input', function() {
    gr_input.value = betaCodeToGreek(bt_input.value);
  }, true);
});

}());
