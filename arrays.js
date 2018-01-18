var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array]
  return newArray
}
addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element)
  return array
}
destructivelyAddElementToBeginningOfArray()

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}
addElementToEndOfArray()

function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element)
  return array
}
destructivelyAddElementToEndOfArray()