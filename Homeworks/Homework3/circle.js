let cirleArea = function (radius) {
  return new Promise(function (resolve, reject) {
    if (radius > 0) {
      let result_cirleArea = Math.PI * radius * radius;
      resolve(result_cirleArea);
    } else {
      reject("Radius must be positive"); //
    }
  });
};

let circleCircumference = function (radius) {
  return new Promise(function (resolve, reject) {
    if (radius > 0) {
      let result_circleCircumference = 2 * Math.PI * radius;
      resolve(result_circleCircumference);
    } else {
      reject("Radius must be positive");
    }
  });
};

module.exports = { cirleArea, circleCircumference };
