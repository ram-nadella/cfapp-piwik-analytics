#!/usr/bin/env bash
set -x

_FILE=public/javascripts/piwik_analytics.js

find ./ -type f -name \*.js -exec jsl -process {} \;


echo copy over in place cloudflare.json
#find ./ -type f -name \*.json -exec jsonlint-i {} \;

jsonlint -process cloudflare.json  >cloudflare.json2 ;mv cloudflare.json2 cloudflare.json
