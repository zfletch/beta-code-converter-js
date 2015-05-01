var Assert;

(function () {
'use strict';

var globalCount = 1;

var equal = function (test, expected, message) {
  if (typeof message === "undefined") {
    message = "test " + globalCount;
    globalCount++;
  }

  if (test === expected) {
    console.log("[passed] " + message);
    return true;
  } else {
    console.log("[FAILED] " + message + "\n  expected: " + expected + "\n  received: " + test);
    return false;
  }
};


Assert = {
  equal: equal,
};

}());
