Beta Code Converter
===================

Converts Greek beta code to Greek characters and vice versa.
If you type in Greek characters, it displays the equivalent beta code characters.
If you type in beta code, it displays the corresponding Greek characters.

Beta code is a system for encoding ancient Greek text using ASCII characters.
It is used by certain websites (for example, the Perseus Digital Library) for searching
through texts or looking up words.
For more information see:

- [https://en.wikipedia.org/wiki/Beta\_Code](https://en.wikipedia.org/wiki/Beta_Code)
- [http://www.tlg.uci.edu/encoding/](http://www.tlg.uci.edu/encoding/)

Try it Out
----------

[https://zfletch.github.io/beta-code-converter-js/](https://zfletch.github.io/beta-code-converter-js/)

Browser Extensions
------------------

There are Chrome and Firefox extensions available if you want to add the
converter to your browser. (See the [chrome\_extension](https://github.com/zfletch/beta-code-converter-js/tree/master/chrome_extension)
and [firefox\_extension](https://github.com/zfletch/beta-code-converter-js/tree/master/firefox_extension) directories
for more information). There is also an HTML page in the [static](https://github.com/zfletch/beta-code-converter-js/tree/master/static) directory.

Caveats
-------

Right now this only implements the subset of beta code used by Perseus for their
Greek texts (for example, no lunate sigma). Future versions may add a dropdown menu
to select different versions of beta code and maybe different languages.
