const promiseResolve = new Promise((resolve, reject) => {
  // Set Timeout 兩秒後回傳值，模擬IO
  setTimeout(() => {
    resolve('resolve');
  }, 2000);
});

const promiseReject = new Promise((resolve, reject) => {
  // Set Timeout 兩秒後回傳值，模擬IO
  setTimeout(() => {
    reject('reject');
  }, 2000);
});

promiseResolve
  .then((retVal) => {
    console.log('function promiseResolve runs into then with retVal=', retVal);
  })
  .catch((retVal) => {
    console.log('function promiseResolve runs into catch with retVal=', retVal);
  });

promiseReject
  .then((retVal) => {
    console.log('function promiseReject runs into then with retVal=', retVal);
  })
  .catch((retVal) => {
    console.log('function promiseReject runs into catch with retVal=', retVal);
  });