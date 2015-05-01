#!/usr/bin/env bash

cat ./src/bt.js \
  ./src/converter.js \
  ./test/assert.js \
  ./test/*.js \
  | node
