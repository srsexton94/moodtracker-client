'use strict'

const Chart = require('chart.js')

const moodsArr = ['happy', 'calm', 'sad', 'nervous', 'motivated', 'angry']

const findMoodCount = data => { // receives the API data moods array
  const countArr = [0, 0, 0, 0, 0, 0] // initializes each mood count at 0
  data.forEach(entry => {
    const moodIndex = moodsArr.indexOf(entry.mood) // for every entry, find it index
    countArr[moodIndex] += 1 // use that index to add one to its tally
  })
  return countArr // returns an array with 6 tallies, indices matching moodsArr
}

const onShowMoodVisualSuccess = data => {
  // returns an array of how many times each mood was selected
  const countArr = findMoodCount(data.moods)
  // reveals the canvas element in case it was previously hidden
  $('#chart').show()
  // establishes context (the canvas element)
  const ctx = $('#chart')

  // sets global variables for chart defaults
  Chart.defaults.global.defaultFontFamily = 'Lato'
  Chart.defaults.global.defaultFontSize = 18

  const moodChart = new Chart(ctx, {
    type: 'bar', // options: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: moodsArr, // array of mood names
      datasets: [{
        label: 'Your Mood Meter!', // Title was put in label spot due to format error
        data: countArr, // array of total count of each mood
        backgroundColor: [
          'yellow',
          'blue',
          'purple',
          'orange',
          'green',
          'red'
        ]
      }],
      options: {
        title: { // doesn't seem to be displaying properly.. fix for later
          display: true,
          text: 'Your Mood Meter',
          fontSize: 30
        },
        legend: { display: false },
        layout: { padding: 0 }
      }
    }
  })

  $('.reveal-btn').addClass('hidden') // hides the button upon chart reveal
  return moodChart // useless return, rids linter error for unused variable
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
