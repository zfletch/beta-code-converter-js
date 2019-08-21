Beta Code Converter Chrome Extension
====================================

View in the Play Store
----------------------

See [https://chrome.google.com/webstore/detail/greek-beta-code-converter/abelaepcjjpjpkhpbbeggnijcccphpnp?hl=en](https://chrome.google.com/webstore/detail/greek-beta-code-converter/abelaepcjjpjpkhpbbeggnijcccphpnp?hl=en)

How to Build Locally
--------------------

- Bump version in`chrome_extension/manifest.json` if necessary
- Run `./bin/chrome_build.sh`
- Open Chrome and go to `chrome://extensions/`
- Enable `Developer mode` by clicking the checkbox in the top right corner of the page
- Click `Load unpacked extension` and select the folder `/your/path/to/beta-code-converter-js/chrome_extension`
- Run `./bin/chrome_package.sh` to generate `package.zip` and visit [the dashboard](https://chrome.google.com/webstore/developer/dashboard) if uploading to web store

Source
------

The source this extension is based on is located at [https://github.com/zfletch/beta-code-converter-js](https://github.com/zfletch/beta-code-converter-js)
