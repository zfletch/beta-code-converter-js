#!/usr/bin/env bash

cat ./src/bt.js \
  ./src/converter.js \
  > ./chrome_extension/compiled.js

cp ./icons/*.png ./chrome_extension/
