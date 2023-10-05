function add(x) {
  let sum = x;
  function resultFn(y) {
    sum = sum * y;
    return resultFn;
  }
  resultFn.valueOf = function () {
    return sum;
  };
  return resultFn;
}

console.log(add(3)(4)(5)(6));

//reference : https://theanubhav.com/2019/02/03/js-currying-in-interview/
