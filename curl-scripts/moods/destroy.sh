# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/examples/destroy.sh

curl "https://moodtracker-api.herokuapp.com/moods/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
