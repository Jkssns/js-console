// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const jsonLog = require('./src/modules/json-log.js');
const toast = require('./src/modules/toast.js');
const log = require('./src/modules/log.js');
const removeAllLog = require('./src/modules/remove-all-log.js');
const annotateAllLog = require('./src/modules/annotate-all-log.js');

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
	context.subscriptions.push(annotateAllLog);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
