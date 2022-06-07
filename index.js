const firstNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (firstNames) => {
  return getFirstNames(firstNames);
};

module.exports = getPeopleInCity;
