'use strict'

const hoverDescribe = event => {
  // console.log(event.target)
}

const addHandlers = () => {
  $('.mood').on('mouseover', hoverDescribe)
}

module.exports = {
  addHandlers
}
