'use strict'

const Chart = require('chart.js')

// array of mood keys in order of input
const moodsArr = ['happy', 'calm', 'sad', 'nervous', 'motivated', 'angry']

const findMoodCount = data => { // receives the API data moods array
  const countArr = [0, 0, 0, 0, 0, 0] // initializes each mood count at 0
  data.forEach(entry => {
    // for every entry, find its index
    const moodIndex = moodsArr.indexOf(entry.mood)
    // use that index to add one to its tally
    countArr[moodIndex] += 1
  })
  return countArr // returns an array of 6 tallies, indices matching moodsArr
}

const onShowMoodVisualSuccess = data => {
  // returns an array of how many times each mood was selected
  const countArr = findMoodCount(data.moods)

  $('#chart').show() // reveals the canvas element in case previously hidden

  const ctx = $('#chart') // establishes chart context (the canvas element)

  const moodChart = new Chart(ctx, {
    type: 'bar', // sets chart type
    data: {
      labels: moodsArr, // array of mood keys
      datasets: [{
        label: 'Your Mood Meter!',
        data: countArr, // array of each mood's total count
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
        title: {
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
    $('#datavisual-message').text('') // clears failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onShowMoodVisualSuccess,
  onDataVisualFailure
}
