var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToEndOfArray(array, element) {
  var newArray = [...array,element]
  return newArray
}
addElementToEndOfArray()

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [...array,element]
  return array
}
destructivelyAddElementToBeginningOfArray()