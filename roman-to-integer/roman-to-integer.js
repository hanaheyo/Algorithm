/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(str) {
  const object = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
  };
  let array = Array.from(str, x => object[x]);
  if (array.length === 1) {
    return array[0];
  } 
  let value = 0;
  
  for (let i = 0; i < array.length; i++) {
    array[i] < array[i+1] ? value -= array[i] : value += array[i]
  };
  return value;
};

