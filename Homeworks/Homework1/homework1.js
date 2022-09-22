const inputArray = process.argv.slice(2);
let areaCircle = (radius) => {
  let area = Math.PI * Math.pow(radius, 2);
  console.log(area.toFixed(2));
};
areaCircle(inputArray[0] * 1);
