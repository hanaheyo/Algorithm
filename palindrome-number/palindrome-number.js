/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const array = x.toString().split('');
    let value = true;
    if (x < 0) return false;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
        if ( i+j == array.length -1) {
            if (array[i] !== array[j]) {
                value = false;   
          }
        }
      }
    }
    return value;
};