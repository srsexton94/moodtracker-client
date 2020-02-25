'use strict'

const onShowMoodVisualSuccess = data => {
  console.log(data) // console.logging to view format
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
