(function () {
'use strict';

var beta_code_to_unicode = require('./vendor/beta-code-json/beta_code_to_unicode.json');
var unicode_to_beta_code = require('./vendor/beta-code-json/unicode_to_beta_code.json');
var max_beta_code_character_length = _longestKeyLength(beta_code_to_unicode);

function greekToBetaCode (greek) {
  var greek_characters = greek.split('');
  var beta_code_characters = [];
  var current_character, ii;

  for (ii = 0; ii < greek_characters.length; ii++) {
    current_character = greek_characters[ii];

    if (unicode_to_beta_code.hasOwnProperty(current_character)) {
      beta_code_characters.push(unicode_to_beta_code[current_character]);
    } else {
      beta_code_characters.push(current_character);
    }
  }

  return beta_code_characters.join('');
}

function betaCodeToGreek (beta_code) {
  var beta_code_characters = beta_code.split('');
  var greek_characters = [];
  var start = 0;
  var end, slice, new_start, current_character, max_length;

  while (start <= beta_code_characters.length) {
    current_character = beta_code_characters[start];
    new_start = start + 1;
    max_length = _min(beta_code_characters.length, start + max_beta_code_character_length);

    // match the longest possible substring that's valid beta code, from left to right
    // for example 'e)' is valid beta code (ἐ) but 'e)/' is also valid beta code (ἕ)
    // the string 'e)/' should be interpreted as 'e)/' and not as 'e)' + '/'
    for (end = new_start; end <= max_length; end++) {
      slice = beta_code_characters.slice(start, end).join('');

      if (beta_code_to_unicode.hasOwnProperty(slice)) {
        current_character = beta_code_to_unicode[slice];
        new_start = end;
      }
    }

    greek_characters.push(current_character);
    start = new_start;
  }

  return _sigmaToEndOfWordSigma(greek_characters.join(''));
}

module.exports = {
  greekToBetaCode: greekToBetaCode,
  betaCodeToGreek: betaCodeToGreek
};

if (typeof window !== 'undefined') {
  window.greekToBetaCode = greekToBetaCode;
  window.betaCodeToGreek = betaCodeToGreek;
}

function _longestKeyLength (obj) {
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
}

// this function replaces σ with ς when:
//   - at the end of a line
//   - followed by whitespace
//   - followed by a punctuation character
// REGEX NOTE: word boundary \b doesn't work well with unicode
function _sigmaToEndOfWordSigma (string) {
  return string.replace(/σ(?=[,.:;·\s]|$)/g, 'ς');
}

function _min (a, b) {
  return a < b ? a : b;
}
})();
