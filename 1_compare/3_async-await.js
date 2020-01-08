// 目標:
// 理解async/await及應用
var fs = require('fs');

// 此處建立的promise跟1.2一樣
// promise跟async/await是相近的概念，在Node 7.10.1版本之後建立的Promise多數都可以用async/await的方式去呼叫
fs.readFileAsync = function(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, function(err, data) {
			if (err) return reject(err);
			return resolve(data);
		});
	});
};

// 試著用async/await的方式從TestFile.txt讀值
// 在使用到await關鍵字時，外部第一層的function必須加上async
const runAsync = async function() {
	try {
		const data = await fs.readFileAsync('./TestFile.txt');
		console.log(data.toString());
	} catch (error) {
		// 若在try的scope內如果發生(1.throw exception 2.await內部的promise reject) 會在該行跳出try並開始執行catch內的程式碼
		// 若在try內沒有發生，則catch內部的程式碼不會執行到
		console.log('error occurred:', error);
	}
};
runAsync();
// OUTPUT:
// Here is my content.

// 將promise的寫法換成async/await去寫程式的可讀性又變得更高
// 看起來跟同步的function一樣
const runAsync2 = async () => {
	try {
		let content = '';
		let line = 1;
		let data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		data = await fs.readFileAsync('./TestFile.txt');
		content += line++ + '. ' + data.toString() + '\n';
		console.log(content);
	} catch (error) {
		console.log('error occurred:', error);
	}
};
runAsync2();
// OUTPUT
// 1. Here is my content.
// 2. Here is my content.
// 3. Here is my content.
// 4. Here is my content.
// 5. Here is my content.
// 6. Here is my content.

// 換成async/await後也可以直接在for loop內執行
const runAsync3 = async () => {
	try {
		let content = '';
		let line = 1;
		for (; line <= 6; line++) {
			let data = await fs.readFileAsync('./TestFile.txt');
			content += line + '. ' + data.toString() + '\n';
		}
		console.log(content);
	} catch (error) {
		console.log('error occurred:', error);
	}
};
runAsync3();
// OUTPUT
// 1. Here is my content.
// 2. Here is my content.
// 3. Here is my content.
// 4. Here is my content.
// 5. Here is my content.
// 6. Here is my content.
