const squareRoot = num => Math.sqrt(num);

false + 20
const squareRoot = num => Math.sqrt(num);
orange

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
orange - true
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const isEven = num => num % 2 === 0;
4,88,80,72,30,21,14,36,60,55,43,25,14,25,66,2,68,16,24,40,28,29,73,61,11,81,65,45,26,0,73,27,67,54,46,91,69,62,93,28,19 * 89,65,25,66,75,5,0,44,44,81,88,65,39,45,85,10,51,36,5,62,99,87,84,78,30,71,50,17,17,23,47,39,45,97,9,66,13,23,99,61,38,16,14,55,48,87,15,51,99,97,60,60,74,36,35,96,25,22,19,15,55,56,31,16,68,28,0,68,96,13,48,5,89,28,14,11,38,86,82,52,41,62,30
const capitalizeString = str => str.toUpperCase();

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
60,39,24,93,73,94,52,65,34,88,23,74,45,68,1,39,97,94,65,68,50,95,36,53,43,50,58,54,95,46,25,35,50,31,23,16,32,80,50,67,3,2,76,26,19,11,8,46,90,24,43,82,10,56,91,3,21,16,5,91,63,43,67,8,52,99,20,37,32,39 - false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
23 + 33
const capitalizeString = str => str.toUpperCase();

const reverseWords = str => str.split(" ").reverse().join(" ");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getUniqueValues = array => [...new Set(array)];
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
