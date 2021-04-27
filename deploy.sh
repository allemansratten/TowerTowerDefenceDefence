#!/bin/bash
set -xe

# Update git from remote
git checkout master
git pull
git checkout gh-pages
git merge -X theirs master

# Build and push
npm run build
git add ./dist/ -f 
git commit -m "Publish."
git push
