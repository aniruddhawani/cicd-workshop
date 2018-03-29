#!/usr/bin/env bash

# install request module
cd ~/node
npm install

sudo pm2 start index.js -f