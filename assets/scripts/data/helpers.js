'use strict'

const moodsArr = ['happy', 'calm', 'sad', 'nervous', 'motivated', 'angry']

const findMoodCount = data => { // receives the API data moods array
  const countArr = [0, 0, 0, 0, 0, 0] // initializes each mood count at 0
  data.forEach(entry => {
    // for every entry, find its index
    const moodIndex = moodsArr.indexOf(entry.mood)
    // use that index to add one to its tally
    countArr[moodIndex] += 1
  })
  return countArr // returns an array of 6 tallies, indices matching moodsArr
}

const formatDate = datetime => { // extracts & combines each component part of the date
  const year = datetime.substring(0, 4)
  const month = datetime.substring(5, 7)
  const day = datetime.substring(8, 10)
  return month + '/' + day + '/' + year
}

const formatDateArr = arr => {
  const dateArr = arr.map(str => str.created_at)
    .sort()
    .map(formatDate)

  return [...new Set(dateArr)] // deletes duplicates and returns array
}

const findCountByDate = (data, mood) => {
  const entriesWithMood = []

  data.forEach(entry => {
    if (entry.mood === mood) {
      entriesWithMood.push(entry)
    }
  })

  const countByDate = []
  const dates = formatDateArr(data)

  for (let i = 0; i < entriesWithMood.length; i++) {
    for (let j = 0; j < dates.length; j++) {
      // if the entry's created_at is the same as this index's date add 1 to
      // this date index on countByDate
      const moodEntryDate = formatDate(entriesWithMood[i].created_at)

      if (moodEntryDate === dates[j]) {
        if (countByDate[j] === undefined) {
          countByDate[j] = 0
        }
        countByDate[j] += 1
      }
    }
  }
  return countByDate
}

const formattedData = data => {
  return {
    dateArr: formatDateArr(data),
    counts: {
      happy: findCountByDate(data, 'happy'),
      calm: findCountByDate(data, 'calm'),
      sad: findCountByDate(data, 'sad'),
      nervous: findCountByDate(data, 'nervous'),
      motivated: findCountByDate(data, 'motivated'),
      angry: findCountByDate(data, 'angry')
    }
  }
}

module.exports = {
  moodsArr,
  findMoodCount,
  formattedData
}
