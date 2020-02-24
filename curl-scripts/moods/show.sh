# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/examples/show.sh

curl "https://moodtracker-api.herokuapp.com/moods/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
