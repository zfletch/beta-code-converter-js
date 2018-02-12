Beta Code JS
===================

Overview
--------

Converts Greek beta code to Greek characters and vice versa.

Try it Out
----------

[https://zfletch.github.io/beta-code-converter-js/](https://zfletch.github.io/beta-code-converter-js/)

Installation
------------

`npm install beta-code-js`

Usage
-----

```javascript
var bc = require('beta-code-js');

bc.greekToBetaCode('χαῖρε ὦ κόσμε');
// => 'xai=re w)= ko/sme'

bc.betaCodeToGreek('mh=nin a)/eide qea\\ *phlhi+a/dew *)axilh=os');
// => 'μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος'

```

Usage in Browser
----------------

```html
<html>
<script src="bundle/beta-code.js"></script>

<body>
  <script>
    console.log(greekToBetaCode('χαῖρε ὦ κόσμε'));
    // => 'xai=re w)= ko/sme'

    console.log(betaCodeToGreek('mh=nin a)/eide qea\\ *phlhi+a/dew *)axilh=os'));
    // => 'μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος'
  </script>
</body>
</html>
```

Tests
-----

`npm test`

Building for Browser
--------------------

`npm run bundle`

Notes
-----

For the mappings between beta code and Unicode, see [https://github.com/zfletch/beta-code-json](https://github.com/zfletch/beta-code-json).
For an example of this package being used, see [https://github.com/zfletch/beta-code-converter-js](https://github.com/zfletch/beta-code-converter-js).
