Beta Code Converter Firefox Add-On
==================================

Download in Firefox
-------------------

See [https://addons.mozilla.org/en-US/firefox/addon/greek-beta-code-converter/](https://addons.mozilla.org/en-US/firefox/addon/greek-beta-code-converter/)

How to Build Locally
--------------------

- Bump version in `firefox_extension/manifest.json` if necessary
- Run `./bin/firefox_build.sh`
- Open Firefox and go to `about:debugging`
- Click 'This Firefox'
- Click `Load Temporary Add-on` and select the file `/your/path/to/beta-code-converter-js/firefox_extension/manifest.json`
- Run `./bin/firefox_package.sh` to generate `package.zip` and visit [the developer hub](https://addons.mozilla.org/en-US/developers/) if uploading to web store

Source
------

The source this add-on is based on is located at [https://github.com/zfletch/beta-code-converter-js](https://github.com/zfletch/beta-code-converter-js)
