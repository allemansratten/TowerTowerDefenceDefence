#!/bin/bash
set -xe

# Update version
git log -n 1 --pretty="%H %s" > assets/version.txt
git add ./assets/version.txt 
git commit -m "Update version."
git push

# Update git from remote
git checkout master
git pull
git checkout gh-pages
git merge -X theirs master

# Build and push
npm run build
git add ./dist_post_ld/ -f
git commit -m "Publish."
git push

# Come back to master (useful when script is copied on windows)
git checkout master