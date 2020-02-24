'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js') // why is this now throwing an error w/o .js end?
const ui = require('./ui.js')

const onSubmitForm = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.postMood(data)
    .then(ui.onSubmitFormSuccess)
    .catch(ui.onSubmitFormFailure)
}

const addHandlers = () => {
  $('#entry-submission').on('submit', onSubmitForm)
}

module.exports = {
  addHandlers
}
