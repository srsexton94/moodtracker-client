'use strict'

const moodVisualTemplate = require('../templates/moodvisual.handlebars')
// const Chart = require('chart.js')
// const myChart = new Chart(ctx, {})

const onShowMoodVisualSuccess = data => {
  // data format { mood: [ {id, mood, created_at, user}, {}, {}, {}, ... {} ] }

  // Gets the data from the api & sends to template
  // Returns HTML code postulated with the API data sent
  const moodVisualHtml = moodVisualTemplate(data)

  // Uses the compiled HTML and adds it to the page
  $('.reveal-btn').addClass('hidden') // hides the button upon chart reveal
  $('#mood-visual').html(moodVisualHtml)
}

const onDataVisualFailure = () => {
  // sends user failure message, colored red for visibility
  $('#datavisual-message').text('Apologies, an error occurred. Please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#datavisual-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onShowMoodVisualSuccess,
  onDataVisualFailure
}
