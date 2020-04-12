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
  // posts clarifying message w/mood selection
  const myMood = event.target.id + '?'
  $('#main-message').text(myMood).css('color', 'black')

  const emoji = $(event.target).parent() // finds the selected radio's label
  $('.emoji').removeClass('emoji-select') // removes any prior-selected highlight
  $(emoji).addClass('emoji-select') // highlights selected emoji
}

const expandInstruct = () => {
  $('#instruct').removeClass('hidden')
}

const collapseInstruct = () => {
  $('#instruct').addClass('hidden')
}

const instructClick = () => {
  // if #instruct has .hidden, expandInstruct()
  if ($('#instruct').hasClass('hidden')) {
    expandInstruct()
  } else {
    collapseInstruct()
  }
}

const onValueChange = event => {
  const val = event.target.value // gets the value entered by user
  const meterId = `#${event.target.id}-meter` // finds the associated meter
  $(meterId).val(val) // updates the meter's value
}

const addHandlers = () => {
  $('.radio').on('click', selectRadio)
  $('#mobilenav-open').on('click', openMobileNav)
  $('#mobilenav-close').on('click', closeMobileNav)
  $('#instruct-toggle').on('click', instructClick)
  $('#instruct-toggle').on('mouseenter', expandInstruct)
  $('#instruct-toggle').on('mouseleave', collapseInstruct)
  $('#needs-fieldset input').on('change', onValueChange)
}

module.exports = {
  addHandlers,
  closeMobileNav
}
