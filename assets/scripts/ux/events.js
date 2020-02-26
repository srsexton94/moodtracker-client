'use strict'

const openMobileNav = event => {
  $('#mobilenav-open').css('display', 'none')
  $('#mobilenav').css('display', 'block')
  $('#mobilenav-close').css('display', 'inline-block')
}

const closeMobileNav = event => {
  $('#mobilenav').css('display', 'none')
  $('#mobilenav-close').css('display', 'none')
  $('#mobilenav-open').css('display', 'block')
}

const selectRadio = event => {
  const myMood = event.target.id + '?'
  $('#mood-message').text(myMood)
}

const addHandlers = () => {
  $('.radio').on('click', selectRadio)
  $('#mobilenav-open').on('click', openMobileNav)
  $('#mobilenav-close').on('click', closeMobileNav)
}

module.exports = {
  addHandlers
}
