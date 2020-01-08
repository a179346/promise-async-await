const addPromise = (a, b) => {
	return new Promise((resolve, reject) => {
		// Set Timeout 兩秒後回傳值，模擬IO
		setTimeout(() => {
			if (b <= 0) return reject("b can't be less than 0.");
			resolve(a + b);
		}, 2000);
	});
};

async function runInOrder() {
	try {
		const a = await addPromise(1, 2);
		const b = await addPromise(2, 3);
		console.log('runInOrder finished output:', [a, b]);
	} catch (error) {
		console.log('catch error:', error);
	}
}

async function runWithPromiseAll() {
	try {
		const a = addPromise(1, 2);
		const b = addPromise(2, 3);
		const output = await Promise.all([a, b]);
		console.log('runWithPromiseAll finished output:', output);
	} catch (error) {
		console.log('catch error:', error);
	}
}

runInOrder(); // 四秒後得到結果
runWithPromiseAll(); // 兩秒後得到結果
