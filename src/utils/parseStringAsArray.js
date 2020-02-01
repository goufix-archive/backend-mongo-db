module.exports = function parseArrayAsString(stingToBeAnArray) {
  return stingToBeAnArray.split(",").map(value => value.trim().toLowerCase());
};
