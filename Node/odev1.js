const radius = process.argv.slice(2);
const areaCircle = (radius) => {
  const PI = 3.14;
  const area = Math.trunc(PI * radius * radius);
  console.log(`Area of ​​circle with radius ${radius} is ${area}`);
};

areaCircle(Number(radius[0]));
