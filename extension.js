// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "js-log" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let toast = vscode.commands.registerTextEditorCommand('js-log.toast', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('今天也要为我司鞠躬尽瘁哦!');
	});



	const qlog = vscode.commands.registerTextEditorCommand('js-log.qlog', function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const reversed = '\n' + '1'
			console.log(selection, 'selection')
			editor.edit(editBuilder => {
				const log = `console.log('line${selection.end.line + 2} ${word}:::', ${word})`
				editBuilder.insert(selection.end, '\r\n' + log);

			});
		}
	});


	context.subscriptions.push(toast);
	context.subscriptions.push(qlog);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
