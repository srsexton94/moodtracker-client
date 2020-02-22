'use strict'

const hoverDescribe = event => {
  // console.log(event.target)
}

const selectRadio = event => {
  const myMood = event.target.id + '?'
  $('#mood-message').text(myMood)
}

const addHandlers = () => {
  $('.mood').on('mouseover', hoverDescribe)
  $('.radio').on('click', selectRadio)
}

module.exports = {
  addHandlers
}
