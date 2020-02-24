#!/bin/bash

curl "https://moodtracker-api.herokuapp.com/moods" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "mood": {
      "mood": "'"${MOOD}"'"
    }
  }'

echo
