#!/usr/bin/env bash

cat ./node_modules/beta-code-js/bundle/beta-code.js \
  > ./chrome_extension/compiled.js

cp ./icons/*.png ./chrome_extension/
