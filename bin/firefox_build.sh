#!/usr/bin/env bash

cat ./src/bt.js \
  ./src/converter.js \
  > ./firefox_extension/data/compiled.js

cp ./icons/*.png ./firefox_extension/data/

