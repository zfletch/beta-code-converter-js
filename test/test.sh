#!/usr/bin/env bash

cat ../src/bt.js \
  ../src/converter.js \
  assert.js \
  *.js \
  | node
