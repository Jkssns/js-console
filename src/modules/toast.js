// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

const defaultMsg = '今天也要为公司鞠躬尽瘁哦!';
let arr = [];
axios.get('https://jkssns.oss-cn-hangzhou.aliyuncs.com/json/interest-msg.json', { responseType: 'json' }).then(res => {
	arr = res.data;
})

const toast = vscode.commands.registerCommand('js-console.toast', function () {
	let index = Math.floor(Math.random() * arr.length);
	vscode.window.showInformationMessage(arr[index] || defaultMsg);
});

module.exports = toast;
