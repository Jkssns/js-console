// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	const tag = vscode.workspace.getConfiguration('myExtension');
	console.log(tag, 'tag')

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "js-log" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let toast = vscode.commands.registerTextEditorCommand('js-log.toast', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('今天也要为公司鞠躬尽瘁哦!');
	});


	const qlog = vscode.commands.registerTextEditorCommand('js-log.qlog', function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const varSelection = editor.selection;
			const word = document.getText(varSelection);

			vscode.commands.executeCommand('editor.action.insertLineAfter').then(res => {
				const logOption = vscode.workspace.getConfiguration('js-log');
				const insertSection = editor.selection;
				const variablePilotSymbol = logOption.VariablePilotSymbol || ':::';

				editor.edit((editBuilder) => {
					const quotationMark = logOption.QuotationMark === 'single' ? `'` : `"`;
					const lineStr = logOption.ShowLineTag ? 'line:' + (insertSection.end.line + 1) : '';
					const logEnd = logOption.ShowLogSemicolon ? ");" : ")";

					if (!word) {
						const value = new vscode.SnippetString(`console.log(${quotationMark}$1${variablePilotSymbol} ${quotationMark}, $1${logEnd}`);
						editor.insertSnippet(value, insertSection.start);
						return;
					}

					if (lineStr) {
						const isBegin = logOption.LineTagAtBeginOrEnd === 'begin';
						if (isBegin) {
							editBuilder.insert(insertSection.start, `console.log(${quotationMark + lineStr} ${word + variablePilotSymbol} ${quotationMark}, ${word + logEnd}`);
						} else {
							editBuilder.insert(insertSection.start, `console.log(${quotationMark + word + variablePilotSymbol} ${quotationMark}, ${word}, ${quotationMark + lineStr + quotationMark + logEnd}`);
						}
					} else {
						editBuilder.insert(insertSection.start, `console.log(${quotationMark + word + variablePilotSymbol} ${quotationMark}, ${word + logEnd}`);
					}
				});
			})

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
