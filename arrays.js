var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array]
  return newArray
}
addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array
}
destructivelyAddElementToBeginningOfArray()

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}
addElementToEndOfArray()

function destructivelyAddElementToEndOfArray(array, element) {
  array = [array, element]
  return array
}
destructivelyAddElementToEndOfArray()