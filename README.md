markmiro.github.io
==================
This is source for my personal website.
It's hosted off the master branch because that's how github does user pages.
I use Codeship to deploy the site (basically it just builds and commits the generated files to the master branch of this repo).

The master branch is only available on Github. Each commit that gets pushed triggers Codeship to run it's test script, which commits to the master branch. But since this commit to master triggers Codeship too we need to append each commit to master with "[skip ci]".

If we create a branch off this one then commits to that branch will also trigger Codeship to make commits to master.

## Testing
Run `gulp watch` and any changes changes sync up with `localhost:3000` immediately

## Deploying
Commit and push the code of this branch to github. Doing this will cause Codeship to update the static website by commiting compiled and minified code to master.

[![Codeship Status for markmiro/markmiro.github.io](https://codeship.io/projects/2bb454e0-1ecb-0132-0c4f-7a12a542bc63/status)](https://codeship.io/projects/35572)

[![Coverage Status](https://coveralls.io/repos/markmiro/markmiro.github.io/badge.png)](https://coveralls.io/r/markmiro/markmiro.github.io)

[![Code Health](https://landscape.io/github/markmiro/markmiro.github.io/master/landscape.png)](https://landscape.io/github/markmiro/markmiro.github.io/master)

[![Dependency David](https://david-dm.org/markmiro/markmiro.github.io.png)](https://github.com/markmiro/markmiro.github.io)
