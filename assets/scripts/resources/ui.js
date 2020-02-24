'use strict'

const onSubmitFormSuccess = () => {
  $('#mood-message').text('')
  $('#form-message').text('You submitted successfully!').css('color', 'green')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 2 seconds
  }, 2000)
}

const onSubmitFormFailure = () => {
  $('#form-message').text('There was an error, please try again later.').css('color', 'red')

  setTimeout(() => {
    $('#form-message').text('') // clears the failure message after 3 seconds
  }, 3000)
}

module.exports = {
  onSubmitFormSuccess,
  onSubmitFormFailure
}
