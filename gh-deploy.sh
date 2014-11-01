#!/bin/bash

lein cljsbuild once
git checkout -b gh-deploy
SHA=$(git rev-parse HEAD)
git reset --mixed gh-pages
git rm -r --cached .
rm -f .gitignore
git add *.html
sed 's/Light Table begin -->//; s/<!-- Light Table end//;' -i index.html
git add out
git add *.js
git add *.ogg
git commit -m "deployed $SHA"
git checkout -f gh-pages
git merge --ff gh-deploy
git branch -d gh-deploy
git checkout -f master
