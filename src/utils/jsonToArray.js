
export default function jsonToArray(jsonObj) {
  // Check if the input is a valid JSON object
  if (typeof jsonObj !== 'object' || jsonObj === null) {
    throw new Error('Input is not a valid JSON object');
  }

  // Use Object.keys() to get an array of keys
  const keys = Object.keys(jsonObj);

  // Use map to convert the JSON object to an array of values
  const resultArray = keys.map((key) => jsonObj[key]);

  return resultArray;
}