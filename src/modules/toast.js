const vscode = require('vscode');
const axios = require('axios');

let defaultMsg = '今天也要为公司鞠躬尽瘁哦!';
let arr = [];
const logOption = vscode.workspace.getConfiguration('js-console');

axios.get('https://jkssns.oss-cn-hangzhou.aliyuncs.com/json/interest-msg.json', { responseType: 'json' }).then(res => {
	arr = res.data;

	let index = Math.floor(Math.random() * arr.length);
	defaultMsg = arr[index];
	logOption.ShowEncourageMessageOnStartup && vscode.window.showInformationMessage(defaultMsg + ' (Esc关闭)');
}).catch(() => {
	logOption.ShowEncourageMessageOnStartup && vscode.window.showInformationMessage(defaultMsg + ' (Esc关闭)');
})

const toast = vscode.commands.registerCommand('js-console.toast', function () {
	let index = Math.floor(Math.random() * arr.length);
	vscode.window.showInformationMessage(arr[index] || defaultMsg);
});

module.exports = toast;
