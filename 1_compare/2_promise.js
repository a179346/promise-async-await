// 目標:
// 1. 以1.1為例，試著將callback改寫成promise
// 2.應用 Promise
var fs = require('fs');

// 1. 改寫 fs的readFile function並把他存到readFileAsync
// (fs有readFileSync在應用起來跟同步function一樣較為方便，此處目標在試著改寫callback以及建立一個Promise使用)
fs.readFileAsync = function(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, function(err, data) {
			if (err) return reject(err);
			return resolve(data);
		});
	});
};
// npm上有個module bluebird使用promisify可以簡化改寫成
// fs.readFileAsync = bluebird.promisify(fs.readFile); //這行的效果跟上面那串改寫一模一樣

// 2. Promise應用
// 從TestFile.txt 讀值變成如下
fs.readFileAsync('./TestFile.txt')
	.then(data => {
		console.log(data.toString());
	})
	.catch(err => {
		console.log('error occurred:', err);
	});
// OUTPUT:
// Here is my content.

// 依序執行讀值在promise下的寫法變成如下
// 程式可讀性提高 也變得更好管理
let content = '';
let line = 1;
fs.readFileAsync('./TestFile.txt')
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		return fs.readFileAsync('./TestFile.txt');
	})
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		return fs.readFileAsync('./TestFile.txt');
	})
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		return fs.readFileAsync('./TestFile.txt');
	})
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		return fs.readFileAsync('./TestFile.txt');
	})
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		return fs.readFileAsync('./TestFile.txt');
	})
	.then(data => {
		content += line++ + '. ' + data.toString() + '\n';
		console.log(content);
	})
	.catch(err => console.log('error occurred:', err));
// OUTPUT
// 1. Here is my content.
// 2. Here is my content.
// 3. Here is my content.
// 4. Here is my content.
// 5. Here is my content.
// 6. Here is my content.
