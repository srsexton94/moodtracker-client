'use strict'

const Chart = require('chart.js')
const helpers = require('./helpers.js')

const onShowMoodTallySuccess = data => {
  // returns an array of how many times each mood was selected
  const countArr = helpers.findMoodCount(data.moods)

  $('#chart').show() // reveals the canvas element in case previously hidden

  const ctx = $('#chart') // establishes chart context (the canvas element)

  const moodTallyChart = new Chart(ctx, {
    type: 'bar', // sets chart type
    data: {
      labels: helpers.moodsArr, // array of mood keys
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

  $('.reveal-btn').addClass('hidden') // hides the buttons upon chart reveal
  return moodTallyChart // useless return, rids linter error for unused variable
}

const onShowMoodOverTimeSuccess = data => {
  data = helpers.formattedData(data.moods)

  $('#chart').show() // reveals the canvas element in case previously hidden

  const ctx = $('#chart') // establishes chart context (the canvas element)

  const moodOverTimeChart = new Chart(ctx, {
    type: 'line', // sets chart type
    data: {
      labels: data.dateArr, // an ordered array of each unique date
      datasets: [{
        label: 'Happy',
        data: data.counts.happy,
        borderColor: 'yellow'
      },
      {
        label: 'Calm',
        data: data.counts.calm,
        borderColor: 'blue'
      },
      {
        label: 'Sad',
        data: data.counts.sad,
        borderColor: 'purple'
      },
      {
        label: 'Nervous',
        data: data.counts.nervous,
        borderColor: 'orange'
      },
      {
        label: 'Motivated',
        data: data.counts.motivated,
        borderColor: 'green'
      },
      {
        label: 'Angry',
        data: data.counts.angry,
        borderColor: 'red'
      }]
    },
    options: {
      //
    }
  })

  $('.reveal-btn').addClass('hidden') // hides the buttons upon chart reveal
  return moodOverTimeChart // useless return, rids linter error
}

const onDataVisualFailure = () => {
  // sends user failure message, colored red for visibility
  $('#datavisual-message').text('Apologies, an error occurred. Please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#datavisual-message').text('') // clears failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onShowMoodTallySuccess,
  onShowMoodOverTimeSuccess,
  onDataVisualFailure
}
