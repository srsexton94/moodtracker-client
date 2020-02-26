'use strict'

const Chart = require('chart.js')

const moodsArr = ['happy', 'calm', 'sad', 'nervous', 'motivated', 'angry']

const findMoodCount = data => {
  const countArr = [0, 0, 0, 0, 0, 0]
  data.forEach(entry => {
    const moodIndex = moodsArr.indexOf(entry.mood)
    countArr[moodIndex] += 1
  })
  return countArr
}

const onShowMoodVisualSuccess = data => {
  // returns an array of how many times each mood was selected
  const countArr = findMoodCount(data.moods)
  $('#chart').show()
  const ctx = $('#chart')

  Chart.defaults.global.defaultFontFamily = 'Lato'
  Chart.defaults.global.defaultFontSize = 18

  const moodChart = new Chart(ctx, {
    type: 'bar', // options: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: moodsArr,
      datasets: [{
        label: 'mood count',
        data: countArr,
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
  return moodChart
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
