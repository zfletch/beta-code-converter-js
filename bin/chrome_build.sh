#!/usr/bin/env bash

cat ./beta-code-js/bundle/beta-code.js \
  > ./chrome_extension/compiled.js

cp ./icons/*.png ./chrome_extension/
