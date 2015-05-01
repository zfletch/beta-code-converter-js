var Converter;

(function () {
'use strict';

var bt = BTMap; // defined in ./bt.js

// convert beta code to Greek
var btToGr = function (bt_form) {
  var gr_list = [];
  var chars = bt_form.split('');
  var current_word;
  var start = 0;
  var max_length = _longestKeyLength(bt.reverse_map);
  var end, slice, new_start;

  while (start <= chars.length) {
    current_word = chars[start];
    new_start = start + 1;

    // match the longest possible substring that's valid beta code, from left to right
    // for example 'e)' is valid beta code (ἐ) but 'e)/' is also valid beta code (ἕ)
    // the string 'e)/' should be interpreted as 'e)/' and not as 'e)' + '/'
    for (end = new_start; end <= _min(chars.length, new_start + max_length); end++) {
      slice = chars.slice(start, end).join('');

      if (bt.reverse_map.hasOwnProperty(slice)) {
        current_word = bt.reverse_map[slice];
        new_start = end;
      }
    }

    gr_list.push(current_word);
    start = new_start;
  }

  return _sigmaToOtherSigmaThing(gr_list.join(''));
};

// convert Greek to beta code
var grToBt = function (gr_form) {
  var bt_list = [];

  gr_form.split('').forEach(function (ch) {
    if (bt.map.hasOwnProperty(ch)) {
      bt_list.push(bt.map[ch]);
    } else {
      bt_list.push(ch);
    }
  });

  return bt_list.join('');
};

// NOTE word boundary \b doesn't work well with unicode
// this function replaces σ with ς when:
//   - at the end of a line
//   - followed by whitespace
//   - followed by a punctuation character
var _sigmaToOtherSigmaThing = function (string) {
  return string.replace(/σ(?=[,.:;·\s]|$)/g, 'ς');
};

var _longestKeyLength = function (obj) {
  var key;
  var length = 0;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.length > length) {
        length = key.length;
      }
    }
  }

  return length;
};

var _min = function (a, b) { return a < b ? a : b; }

Converter = {
    grToBt: grToBt,
    btToGr: btToGr
}

}())
