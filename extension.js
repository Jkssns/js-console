// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const jsonLog = require('./src/ctrl-keys/json-log.js');
const toast = require('./src/ctrl-keys/toast.js');
const log = require('./src/ctrl-keys/log.js');
const removeAllLog = require('./src/ctrl-keys/remove-all-log.js');
const commentAllLog = require('./src/ctrl-keys/comment-all-log.js');
const uncommentAllLog = require('./src/ctrl-keys/uncomment-all-log.js');
const formatString = require('./src/alt-keys/format-string.js');
const funPictures = require('./src/alt-keys/fun-pictures.js');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(log);
	context.subscriptions.push(jsonLog);
	context.subscriptions.push(toast);
	context.subscriptions.push(removeAllLog);
	context.subscriptions.push(commentAllLog);
	context.subscriptions.push(uncommentAllLog);
	context.subscriptions.push(...formatString);
	context.subscriptions.push(funPictures);
}

module.exports = {
	activate
}
