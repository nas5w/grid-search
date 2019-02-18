function gridSearch(vars) {
  let all = [];
  for (prop in vars) {
    if (!vars.hasOwnProperty(prop)) continue;
    if (!Array.isArray(vars[prop])) vars[prop] = [vars[prop]];
    all.push(vars[prop].map(val => ({ [prop]: val })));
  }

  function cartesian() {
    var r = [],
      arg = arguments,
      max = arg.length - 1;
    function helper(arr, i) {
      for (var j = 0, l = arg[i].length; j < l; j++) {
        var a = arr.slice(0);
        a.push(arg[i][j]);
        if (i == max) r.push(a);
        else helper(a, i + 1);
      }
    }
    helper([], 0);
    return r;
  }

  return cartesian(...all);
}

let vars = {
  one: [0.8, 0.9],
  two: ["Nick", "blink"],
  three: [1, 2, 3]
};

console.log(gridSearch(vars));
