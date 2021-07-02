/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let array = [];
  strs.forEach( el => {
    for (let i = 0; i <= 200; i++) {
      if (el.charAt(i) !== strs[0].charAt(i)) {
        array.push(i);
        return;
      }
    }
  })
  let index = Math.min(...array);
  return strs[0].slice(0, index);
};