'use strict'

const selectRadio = event => {
  const myMood = event.target.id + '?'
  $('#mood-message').text(myMood)
}

const addHandlers = () => {
  $('.radio').on('click', selectRadio)
}

module.exports = {
  addHandlers
}
