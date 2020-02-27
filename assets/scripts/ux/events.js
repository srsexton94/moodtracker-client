'use strict'

const openMobileNav = () => { // hides hamburger, reveals nav & 'x'
  $('#mobilenav-open').css('display', 'none')
  $('#mobilenav').css('display', 'block')
  $('#mobilenav-close').css('display', 'inline-block')
}

const closeMobileNav = () => { // hides nav & 'x', reveals hamburger
  $('#mobilenav').css('display', 'none')
  $('#mobilenav-close').css('display', 'none')
  $('#mobilenav-open').css('display', 'block')
}

const selectRadio = event => {
  // posts clarifying/identifying message upon mood selection
  const myMood = event.target.id + '?'
  $('#main-message').text(myMood).css('color', 'black')
}

const addHandlers = () => {
  $('.radio').on('click', selectRadio)
  $('#mobilenav-open').on('click', openMobileNav)
  $('#mobilenav-close').on('click', closeMobileNav)
}

module.exports = {
  addHandlers,
  closeMobileNav
}
