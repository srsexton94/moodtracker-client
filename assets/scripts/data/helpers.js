'use strict'

// each named array offers each resource in their standard order for iteration
const moodsArr = ['happy', 'calm', 'sad', 'nervous', 'motivated', 'angry']
const needsArr = ['hunger', 'comfort', 'bladder', 'energy', 'fun', 'social', 'hygiene', 'environment']
// each colors array offers a color choice in the standard orders provided above
const moodColors = ['yellow', 'blue', 'purple', 'orange', 'green', 'red']
const needColors = ['#8B0000', '#ff8c00', '#D4AF37', '#006400', '#00ced1', '#000080', '#800080', '#301934']

// functions for Total Mood Tally visualization data
const findMoodCount = data => { // receives the API data moods array
  const countArr = [0, 0, 0, 0, 0, 0] // initializes each mood count at 0
  data.forEach(entry => { // for every entry, find its index
    const moodIndex = moodsArr.indexOf(entry.mood) // use that index to add one to its tally
    countArr[moodIndex] += 1
  })
  return countArr // returns an array of 6 tallies, indices matching moodsArr
}

// functions for Mood Over Time visualization data
const formatDate = datetime => { // extracts & combines each component part of the date
  const year = datetime.substring(0, 4)
  const month = datetime.substring(5, 7)
  const day = datetime.substring(8, 10)
  return month + '/' + day + '/' + year
}

// return an ordered array of each unique date in dataset
const formatDateArr = arr => {
  // for each entry extract the created_at datetime string
  const dateArr = arr.map(entry => entry.created_at)
    // then sort that returned array
    .sort()
    // then use custom function to format the datetimes as MM/DD/YYYY
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

// functions for each mood's Need Avgs chart data
const findAvgsFor = (entriesArr, moodName) => {
  // given the entries array and a mood, find the average of each need in every
  // entry that has that mood
  // initializes array to hold the total sums of each need, in standard order
  const needSums = [0, 0, 0, 0, 0, 0, 0, 0]
  let divisor = 0 // incremnetor counting how many entries makes up the sums
  entriesArr.forEach(entry => {
    // for each entry, if it's mood is the selected mood...
    if (entry.mood.mood === moodName) {
      needsArr.forEach(need => { // ...then add each of the entry's needs value
        // to the appropriate index of needSums
        const val = entry[need]
        const i = needsArr.indexOf(need)
        needSums[i] += val
      })
      divisor += 1 // raise the incrementor for each entry added
    }
  })
  // returns an array of the averages (each sum divided by the divisor & rounded)
  return needSums.map(tally => Math.round(tally / divisor))
}

module.exports = {
  moodsArr,
  needsArr,
  moodColors,
  needColors,
  findMoodCount,
  formattedData,
  findAvgsFor
}
