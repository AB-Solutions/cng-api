# cng-api


heroku plugins:install heroku-builds
Then, to cancel a build, fetch the list of the recent builds:

heroku builds -a YOUR_APP_NAME
The first line of the output will be your currently running build, the first column is the build ID.

Cancel it with:

heroku builds:cancel BUILD_ID -a YOUR_APP_NAME
