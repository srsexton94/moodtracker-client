# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "https://moodtracker-api.herokuapp.com/moods/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "mood": {
      "happy": "'"${HAPPY}"'",
      "calm": "'"${CALM}"'",
      "sad": "'"${SAD}"'",
      "nervous": "'"${NERVOUS}"'",
      "motivated": "'"${MOTIVATED}"'",
      "angry": "'"${ANGRY}"'"
    }
  }'

  echo
