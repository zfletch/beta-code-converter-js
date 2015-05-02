#!/usr/bin/env bash

cat ./static/index.html \
  | sed -e 's/"\.\//"\.\/static\//' \
  | sed -e 's/"\.\.\//"\.\//' \
  > index.html
