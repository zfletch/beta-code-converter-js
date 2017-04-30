#!/usr/bin/env bash

cat ./beta-code-js/bundle/beta-code.js \
  > ./firefox_extension/compiled.js

cp ./icons/*.png ./firefox_extension/

