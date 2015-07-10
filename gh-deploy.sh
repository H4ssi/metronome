#!/bin/bash

lein cljsbuild once
git checkout -b gh-deploy
SHA=$(git rev-parse HEAD)
git reset --mixed gh-pages
git rm -r --cached .
rm -f .gitignore
cp resources/public/. .
git add *.html
git add js/out
git add js/*.js
git add media/*.ogg
git commit -m "deployed $SHA"
git checkout -f gh-pages
git merge --ff gh-deploy
git branch -d gh-deploy
git checkout -f master
