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

  let permutations = cartesian(...all);
  let final = [];
  permutations.forEach(permutation => {
    final.push(permutation.reduce((r, c) => ({ ...r, ...c }), {}));
  });

  return final;
}

function decimalPlaces(n) {
  var s = "" + +n;
  var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(s);
  if (!match) {
    return 0;
  }
  return Math.max(
    0,
    (match[1] == "0" ? 0 : (match[1] || "").length) - (match[2] || 0) // fraction length
  );
}

function range(start, finish, step = 1) {
  let arr = [];
  const decimals = decimalPlaces(step);
  for (let i = start; i <= finish; i += step) {
    i = Math.round(i * Math.pow(10, decimals)) / Math.pow(10, decimals);
    arr.push(i);
  }
  return arr;
}

module.exports = { gridSearch, range };
