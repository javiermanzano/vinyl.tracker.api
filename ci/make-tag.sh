node ./ci/update-version.js $1
git add package.json
NEXT_VERSION=`cat package.json | json version`
git commit -m "New release: $NEXT_VERSION"
git tag -a $NEXT_VERSION -m "New release: $NEXT_VERSION"
git push