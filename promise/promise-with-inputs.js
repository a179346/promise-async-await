const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    // Set Timeout 兩秒後回傳值，模擬IO
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

addPromise(1, 2)
  .then((retVal) => {
    console.log('function addPromise runs into then with retVal=', retVal);
  })
  .catch((retVal) => {
    console.log('function addPromise runs into catch with retVal=', retVal);
  });