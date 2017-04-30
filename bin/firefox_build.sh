#!/usr/bin/env bash

cat ./node_modules/beta-code-js/bundle/beta-code.js \
  > ./firefox_extension/compiled.js

cp ./icons/*.png ./firefox_extension/
