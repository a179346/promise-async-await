//目標: 理解callback的應用 以及 callback的問題(callback hell)
var fs = require('fs');

// 下面為callback的例子
// 從TestFile.txt中讀值 並顯示出來
fs.readFile('./TestFile.txt', function(err, data) {
	if (err) throw err;
	console.log(data.toString());
});
// OUTPUT:
// Here is my content.

// 當使用callback時，如果有好幾個callback要依序進行
// 容易形成callback hell
// 可讀性變很差  如下面例子
let content = '';
let line = 1;
fs.readFile('./TestFile.txt', function(err, data) {
	content += line++ + '. ' + data.toString() + '\n';
	fs.readFile('./TestFile.txt', function(err, data) {
		content += line++ + '. ' + data.toString() + '\n';
		fs.readFile('./TestFile.txt', function(err, data) {
			content += line++ + '. ' + data.toString() + '\n';
			fs.readFile('./TestFile.txt', function(err, data) {
				content += line++ + '. ' + data.toString() + '\n';
				fs.readFile('./TestFile.txt', function(err, data) {
					content += line++ + '. ' + data.toString() + '\n';
					fs.readFile('./TestFile.txt', function(err, data) {
						content += line++ + '. ' + data.toString() + '\n';
						console.log(content);
					});
				});
			});
		});
	});
});
// OUTPUT
// 1. Here is my content.
// 2. Here is my content.
// 3. Here is my content.
// 4. Here is my content.
// 5. Here is my content.
// 6. Here is my content.
