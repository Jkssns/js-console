// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const jsonLog = vscode.commands.registerCommand('js-console.jsonLog', function () {
	const editor = vscode.window.activeTextEditor;

	if (editor) {
		const document = editor.document;
		const varSelection = editor.selection;
		const word = document.getText(varSelection);
		const logOption = vscode.workspace.getConfiguration('js-console');
		const variablePilotSymbol = logOption.VariablePilotSymbol || ':::';
		const quotationMark = logOption.QuotationMark === 'single' ? `'` : `"`;
		const logEnd = logOption.ShowLogSemicolon ? ");" : ")";
		const logFn = logOption.logMethod || 'console.log';

		if (!word) {
			const value = new vscode.SnippetString(`${logFn}(${quotationMark}$1${variablePilotSymbol} ${quotationMark}, JSON.parse(JSON.stringify($1))${logEnd}`);
			editor.insertSnippet(value, varSelection.start);
			return;
		}

		vscode.commands.executeCommand('editor.action.insertLineAfter').then(() => {
			const insertSection = editor.selection;

			editor.edit((editBuilder) => {
				const lineStr = logOption.ShowLineTag ? 'line:' + (insertSection.end.line + 1) : '';
				
				if (lineStr) {
					const isBegin = logOption.LineTagAtBeginOrEnd === 'begin';
					if (isBegin) {
						editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + lineStr} ${word + variablePilotSymbol} ${quotationMark}, JSON.parse(JSON.stringify(${word}))${logEnd}`);
					} else {
						editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + word + variablePilotSymbol} ${quotationMark}, JSON.parse(JSON.stringify(${word})), ${quotationMark + lineStr + quotationMark + logEnd}`);
					}
				} else {
					editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + word + variablePilotSymbol} ${quotationMark}, JSON.parse(JSON.stringify(${word}))${logEnd}`);
				}
			});
		})

	}
});

module.exports = jsonLog;

