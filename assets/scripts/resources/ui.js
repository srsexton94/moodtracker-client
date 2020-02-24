'use strict'

const onSubmitFormSuccess = () => {
  $('#form-message').text('Your form submitted successfully!')
}

const onSubmitFormFailure = () => {
  $('#form-message').text('There was an error, please try again later.')
}

module.exports = {
  onSubmitFormSuccess,
  onSubmitFormFailure
}
