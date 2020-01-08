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

async function run() {
  try {
    console.log('promiseResolve', promiseResolve);
    console.log('promiseReject', promiseReject);
    console.log('await promiseResolve', await promiseResolve);
    console.log('await promiseReject', await promiseReject);
    console.log('reach the end of try.')
  } catch (error) {
    console.log('catch an error:', error);
  }
}
run();