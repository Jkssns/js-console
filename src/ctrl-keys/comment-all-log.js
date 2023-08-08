const vscode = require('vscode');

const commentAllLog = vscode.commands.registerTextEditorCommand('js-console.commentAllLog', function () {
	const editor = vscode.window.activeTextEditor;
	const document = editor.document;
	const documentText = document.getText();

	editor.edit(editBuilder => {
		const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
		editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), documentText.replace(/console/g, (str, index, allString) => {
			if (allString[index - 1] !== '' && allString[index - 2] !== '/' && allString[index - 3] !== '/') {
				return '// console';
			} else {
				return str;
			}
		}));
	});
});


module.exports = commentAllLog;
