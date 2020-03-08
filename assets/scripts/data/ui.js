'use strict'

const Chart = require('chart.js')
const helpers = require('./helpers.js')

// Creates bar chart of total mood tallies
const onShowMoodTallySuccess = data => {
  $('.chart').hide() // ensure trends charts are emptied
  const countArr = helpers.findMoodCount(data.moods) // returns an array of how many times each mood was selected
  $('#tally-chart').show() // reveals the canvas element in case previously hidden
  const ctx = $('#tally-chart') // establishes chart context (the canvas element)

  const moodTallyChart = new Chart(ctx, {
    type: 'bar', // sets chart type
    data: {
      labels: helpers.moodsArr, // array of mood keys
      datasets: [{
        label: 'Your Mood Meter!',
        data: countArr, // array of each mood's total count
        backgroundColor: helpers.moodColors
      }],
      options: {}
    }
  })
  $('.reveal-btn').removeClass('hidden') // sets all reveal-btns to default display
  $('#moodTally').addClass('hidden') // hides the buttons upon chart reveal
  return moodTallyChart // useless return, rids linter error for unused variable
}

// Creates line chart maping each mood over time (by date)
const onShowMoodOverTimeSuccess = data => {
  $('.chart').hide() // ensure trends charts are emptied
  data = helpers.formattedData(data.moods)
  $('#time-chart').show() // reveals the canvas element in case previously hidden
  const ctx = $('#time-chart') // establishes chart context (the canvas element)

  const moodOverTimeChart = new Chart(ctx, {
    type: 'line', // sets chart type
    data: {
      labels: data.dateArr, // an ordered array of each unique date
      datasets: [{
        label: 'Happy',
        data: data.counts.happy,
        borderColor: helpers.moodColors[0]
      },
      {
        label: 'Calm',
        data: data.counts.calm,
        borderColor: helpers.moodColors[1]
      },
      {
        label: 'Sad',
        data: data.counts.sad,
        borderColor: helpers.moodColors[2]
      },
      {
        label: 'Nervous',
        data: data.counts.nervous,
        borderColor: helpers.moodColors[3]
      },
      {
        label: 'Motivated',
        data: data.counts.motivated,
        borderColor: helpers.moodColors[4]
      },
      {
        label: 'Angry',
        data: data.counts.angry,
        borderColor: helpers.moodColors[5]
      }]
    },
    options: {}
  })
  $('.reveal-btn').removeClass('hidden') // sets all reveal-btns to default display
  $('#moodOverTime').addClass('hidden') // hides the buttons upon chart reveal
  return moodOverTimeChart // useless return, rids linter error
}

const onShowNeedAvgsSuccess = (data, mood) => {
  $('.chart').hide() // ensure trends charts are emptied
  const chartId = `#${mood}-chart`
  console.log(chartId)
  $(chartId).show() // reveals the canvas element in case previously hidden
  const ctx = $(chartId) // establishes chart context (the canvas element)

  const moodTallyChart = new Chart(ctx, {
    type: 'horizontalBar', // sets chart type
    data: {
      labels: helpers.needsArr,
      datasets: [{
        label: 'averages',
        data: helpers.findAvgsFor(data.needs, mood),
        backgroundColor: helpers.needColors
      }]
    },
    options: {}
  })

  $('.reveal-btn').removeClass('hidden') // sets all reveal-btns to default display
  $(`#${mood}-chart`).addClass('hidden') // hides the button upon chart reveal
  return moodTallyChart // useless return, rids linter error for unused variable
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
  onShowNeedAvgsSuccess,
  onDataVisualFailure
}
