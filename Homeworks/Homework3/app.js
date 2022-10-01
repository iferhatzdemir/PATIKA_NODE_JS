const circle = require("./circle.js");
const radius = process.argv[2];
//console.log(process.argv[2]); //Terminal: node app.js 5

circle
  .cirleArea(radius)
  .then((result) => {
    console.log(
      `The area of a circle of radius ${radius} is ${result.toFixed(2)}`
    ); //Terminal: The area of a circle of radius 5 is 78.53981633974483      );
  })
  .catch((err) => {
    console.error(err);
  });

circle
  .circleCircumference(radius)
  .then((result) => {
    console.log(
      `The circumference of a circle of radius ${radius} is ${result.toFixed(
        2
      )}`
    ); //Terminal: The circumference of a circle of radius 5 is 31.41592653589793
  })
  .catch((err) => {
    console.error(err);
  });
