'use strict'

const onSubmitFormSuccess = () => {
  $('#form-message').text('Your form submitted successfully!')
}

const onSubmitFormFailure = () => {
  $('#form-message').text('There was an error, please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 5 seconds
  }, 3000)
}

module.exports = {
  onSubmitFormSuccess,
  onSubmitFormFailure
}
