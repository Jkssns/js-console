const vscode = require('vscode');
const https = require('https');
const logOption = vscode.workspace.getConfiguration('js-console');
const opn = require('opn');
const suggestionUrl = 'https://static-mp-a268227e-62b2-4f41-9a02-f9379fb12ac8.next.bspapp.com';

const toast = (isSame) => {
	let defaultMsg = '今天也要为公司鞠躬尽瘁哦!';
	let arr = [];
	let alreadyToast = logOption.ShowEncourageMessageTimes === '一天一次/Once a day' && isSame; // 一天一次，且已经弹过
	
	https.get('https://jkssns.oss-cn-hangzhou.aliyuncs.com/json/interest-msg.json', (response) => {
		var data = ''
		//数据正在接收中...
		response.on('data', (chunk) => {
			data += chunk;
		});
		//数据接收完成
		response.on('end', () => {
			arr = JSON.parse(data);
			const index = Math.floor(Math.random() * arr.length);
			defaultMsg = arr[index];
			!alreadyToast && logOption.ShowEncourageMessageOnStartup && vscode.window.showInformationMessage(defaultMsg + ' (Esc关闭)', '建议/Suggest').then(res => {
				if (res === '建议/Suggest') {
					opn(suggestionUrl);
				}
			});
		}).on("error", (err) => {
			console.log('err::: ', err);
			!alreadyToast && logOption.ShowEncourageMessageOnStartup && vscode.window.showInformationMessage(defaultMsg + ' (Esc关闭)', '建议/Suggest').then(res => {
				if (res === '建议/Suggest') {
					opn(suggestionUrl);
				}
			});
		});
	});

	return vscode.commands.registerCommand('js-console.toast', function () {
		const index = Math.floor(Math.random() * arr.length);
		const msg = arr[index] || defaultMsg;
		vscode.window.showInformationMessage(msg);
	});
}


module.exports = toast;
