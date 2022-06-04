/**
 * array to string
 * @param {*} a
 * @returns {string}
 */
export function arrayToString(a) {
  var s = "";
  for (var i = 0; i < a.length; i++) {
    if (s != "") s += ",";
    s += a[i];
  }
  return s;
}

/**
 * array to string with ('') quotation
 * @param {*} a
 * @returns {string}
 */
export function arrayToStringWithQ(a) {
  var s = "";
  for (var i = 0; i < a.length; i++) {
    if (s != "") s += ",";
    s += `'${a[i]}'`;
  }
  return s;
}
