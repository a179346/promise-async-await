const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    // Set Timeout 兩秒後回傳值，模擬IO
    setTimeout(() => {
      if (b <= 0) return reject("b can't be less than 0.")
      resolve(a + b);
    }, 2000);
  });
};

async function run() {
  try {
    let sum = await addPromise(1, 2);
    console.log('sum after first add:', sum);
    sum = await addPromise(sum, 2);
    console.log('sum after second add:', sum);
    sum = await addPromise(sum, -1);
    console.log('sum after third add:', sum);
    sum = await addPromise(sum, 3);
    console.log('sum after fourth add:', sum);
  } catch (error) {
    console.log('catch error:', error);
  }
}
run();