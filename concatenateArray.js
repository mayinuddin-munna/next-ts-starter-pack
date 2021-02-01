const ages = [10, 12, 14, 16, 18, 20];
const agesTwo = [11, 13, 15, 17, 19];
const agesThree = [21, 25, 29, 33, 37];
const allAges = ages.concat(agesTwo).concat([5]).concat(agesThree); //ES old version

const allAgesTwo = [...ages, ...agesTwo, 5, ...agesThree]; //ES6 new version

//console.log(allAgesTwo);

let business, minister, sochib;
business = 120;
minister = 10;
sochib = 100;
const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

const maxTk = [500, 601, 940,1000];
const maxTaka = Math.max(...maxTk);
console.log(maxTaka);