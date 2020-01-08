const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const subPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b <= 0) return reject("b can't less than zero")
      resolve(a - b);
    }, 2000);
  });
};

addPromise(1, 2).then((retVal) => {
  console.log('First then:', retVal);
  return subPromise(retVal, 1);
}).then((retVal) => {
  console.log('Second then:', retVal);
  return subPromise(retVal, -1);
}).then((retVal) => {
  console.log('Third then:', retVal);
  return addPromise(retVal, 3);
}).catch((err) => {
  console.log('catch an error:', err);
});