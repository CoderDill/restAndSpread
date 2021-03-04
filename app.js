const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
const findMin = (...nums) => nums.reduce((low, next) => next > low ? low : next);
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const doubleAndReturnArgs = (arr, ...more) => [...arr.map(ar => ar * 2)];
const removeRandom = item => {
    let randomEl = Math.floor(Math.random() * item.length);
    return [...item.slice(0, randomEl), ...item.slice(randomEl + 1)]
}
const extend = (arr1, arr2) => [...arr1, ...arr2]
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}
const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}
const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => {
    let newObj = { ...obj  };
    newObj[key] = val;
    return newObj
}