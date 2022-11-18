const vscode = require('vscode');

const log = vscode.commands.registerTextEditorCommand('js-console.qlog', function () {
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
			const value = new vscode.SnippetString(`${logFn}(${quotationMark}$1${variablePilotSymbol} ${quotationMark}, $1${logEnd}`);
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
						editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + lineStr} ${word + variablePilotSymbol} ${quotationMark}, ${word + logEnd}`);
					} else {
						editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + word + variablePilotSymbol} ${quotationMark}, ${word}, ${quotationMark + lineStr + quotationMark + logEnd}`);
					}
				} else {
					editBuilder.insert(insertSection.start, `${logFn}(${quotationMark + word + variablePilotSymbol} ${quotationMark}, ${word + logEnd}`);
				}
			});
		})

	}
});


module.exports = log
