#!/bin/bash

curl "https://moodtracker-api.herokuapp.com/moods" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
