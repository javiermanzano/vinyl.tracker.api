VERSION=cat package.json | json version
echo "{\"version\":\"$VERSION\", \"build\": $TRAVIS_BUILD_NUMBER}" > build.json