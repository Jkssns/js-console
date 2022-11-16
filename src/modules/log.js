const vscode = require('vscode');

const log = vscode.commands.registerTextEditorCommand('js-console.qlog', function () {
	const editor = vscode.window.activeTextEditor;

	if (editor) {
		const document = editor.document;
		const varSelection = editor.selection;
		const word = document.getText(varSelection);
		const logOption = vscode.workspace.getConfiguration('js-console');
		const variablePilotSymbol = logOption.VariablePilotSymbol || ':::';

		vscode.commands.executeCommand('editor.action.insertLineAfter').then(() => {
			const insertSection = editor.selection;

			editor.edit((editBuilder) => {
				const quotationMark = logOption.QuotationMark === 'single' ? `'` : `"`;
				const lineStr = logOption.ShowLineTag ? 'line:' + (insertSection.end.line + 1) : '';
				const logEnd = logOption.ShowLogSemicolon ? ");" : ")";

				if (!word) {
					const value = new vscode.SnippetString(`console.log(${quotationMark}$1${variablePilotSymbol} ${quotationMark}, $1${logEnd}`);
					editor.insertSnippet(value, varSelection.start);
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


module.exports = log
