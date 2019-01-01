BRANCH=$((git branch) | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')

ENVIRONMENT="develop"
if [ "$TRAVIS_BRANCH" = "staging" ]
then
  ENVIRONMENT="staging"
elif [ "$TRAVIS_BRANCH" = "master" ]
then
  ENVIRONMENT="production"
fi

echo $ENVIRONMENT